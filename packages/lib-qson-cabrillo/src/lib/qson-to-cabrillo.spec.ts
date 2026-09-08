import { EHF_BANDS, SHF_BANDS, UHF_BANDS, VHF_BANDS } from '@ham2k/lib-operation-data'

import { cabrilloFreq, cabrilloMode, qsonToCabrillo } from './qson-to-cabrillo.js'

describe('cabrilloFreq', () => {
  // Microwave operators type the frequency in MHz ('10368.1'). Decide the column on the
  // frequency's magnitude rather than on the band and every one of those contacts is
  // reported as an HF kHz frequency.
  it('reports an identifier for microwave bands, whatever units the frequency was logged in', () => {
    expect(cabrilloFreq({ band: '3cm', freq: 10368.1 })).toEqual('10G')
    expect(cabrilloFreq({ band: '3cm', freq: 10368100 })).toEqual('10G')
    expect(cabrilloFreq({ band: '1.25cm', freq: 24192.1 })).toEqual('24G')
    expect(cabrilloFreq({ band: '4mm' })).toEqual('75G')
  })

  it('reports an identifier for VHF and UHF bands', () => {
    expect(cabrilloFreq({ band: '2m', freq: 144200 })).toEqual('144')
    expect(cabrilloFreq({ band: '1.25m', freq: 222100 })).toEqual('222')
    expect(cabrilloFreq({ band: '70cm', freq: 432100 })).toEqual('432')
  })

  // Every band reported by identifier needs a table entry or its contacts export as '0'.
  // The two lists have to stay in step as the band list grows: a band added to
  // VHF_BANDS and not to the table silently zeroes a whole log.
  it('has an identifier for every band it reports by identifier', () => {
    const bands = [...VHF_BANDS, ...UHF_BANDS, ...SHF_BANDS, ...EHF_BANDS]
    expect(bands.filter((band) => cabrilloFreq({ band }) === '0')).toEqual([])
  })

  it('reports HF in kHz', () => {
    expect(cabrilloFreq({ band: '20m', freq: 14074 })).toEqual('14074')
    // No frequency logged: the band's own default, not '0'.
    expect(cabrilloFreq({ band: '20m' })).toEqual('14000')
  })

  // A band nobody has a frequency for at all. '0' is the marker a checker rejects,
  // which is the point: inventing a plausible frequency would claim a contact on a band
  // this writer cannot name.
  it('reports 0 for a band it does not know', () => {
    expect(cabrilloFreq({ band: 'nonsense' })).toEqual('0')
  })
})

describe('cabrilloMode', () => {
  // Cabrillo has three modes. A writer that passed the logged mode through would put
  // 'USB' or 'FT8' in the column, which no checker reads.
  it('collapses every phone mode to PH and everything else to DG', () => {
    for (const mode of ['SSB', 'USB', 'LSB', 'AM', 'FM']) {
      expect(cabrilloMode({ mode })).toEqual('PH')
    }
    expect(cabrilloMode({ mode: 'CW' })).toEqual('CW')
    expect(cabrilloMode({ mode: 'FT8' })).toEqual('DG')
    expect(cabrilloMode({ mode: 'RTTY' })).toEqual('DG')
    // A record whose MODE column was lost is still written as something.
    expect(cabrilloMode({})).toEqual('DG')
  })
})

describe('qsonToCabrillo', () => {
  const qso = {
    band: '20m',
    freq: 14074,
    mode: 'CW',
    startAtMillis: Date.UTC(2026, 9, 17, 14, 30),
    their: { call: 'K1ABC' }
  }

  it('emits the headers it is given, and drops the ones with no value', () => {
    const content = qsonToCabrillo([], {
      headers: [
        ['CONTEST', 'NY-QSO-PARTY'],
        ['CALLSIGN', 'N0DEV'],
        // An unanswered header is no claim at all — an empty 'EMAIL:' line is a
        // malformed one, and a checker reads it as an address that is not there.
        ['EMAIL', undefined],
        ['GRID-LOCATOR', '']
      ],
      qsoParts: () => []
    })
    expect(content.split('\n')).toEqual([
      'START-OF-LOG: 3.0',
      'CREATED-BY: Ham2K Logger',
      'CONTEST: NY-QSO-PARTY',
      'CALLSIGN: N0DEV',
      'END-OF-LOG:',
      ''
    ])
  })

  it('names its creator, and takes an override', () => {
    expect(qsonToCabrillo([], { headers: [], qsoParts: () => [] })).toContain('CREATED-BY: Ham2K Logger')
    expect(qsonToCabrillo([], { headers: [], qsoParts: () => [], createdBy: 'Test Suite' }))
      .toContain('CREATED-BY: Test Suite')
  })

  // The exchange columns are the contest's, and the frequency/mode/date/time prefix is
  // this writer's. A row that lost the prefix, or one whose columns ran together, is a
  // file a checker cannot parse.
  it('writes one row per contact, prefixed and column-aligned', () => {
    const columns = ['N0DEV'.padEnd(13, ' '), '599', 'ALB   ', 'K1ABC'.padEnd(13, ' '), '599', 'ERI   ']
    const content = qsonToCabrillo([qso], { headers: [], qsoParts: () => columns })
    const rows = content.split('\n').filter((line) => line.startsWith('QSO:'))
    // The contest's columns reach the file verbatim, in order, single-spaced, behind a
    // prefix of exactly frequency, mode, date and time.
    expect(rows).toEqual([`QSO: 14074 CW 2026-10-17 1430 ${columns.join(' ')}`])
  })

  // A QSO party's county line: one contact, several submitted lines, because the checker
  // matches each pairing of counties against the other station's log separately. Every
  // line carries the full prefix — a row with only the exchange columns is unreadable.
  it('writes several rows for one contact, each fully prefixed', () => {
    const content = qsonToCabrillo([qso], {
      headers: [],
      qsoParts: () => [['N0DEV', 'ALB', 'K1ABC', 'ERI'], ['N0DEV', 'REN', 'K1ABC', 'ERI']]
    })
    const rows = content.split('\n').filter((line) => line.startsWith('QSO:'))
    expect(rows.length).toEqual(2)
    for (const row of rows) expect(row).toMatch(/^QSO: 14074 CW +2026-10-17 1430 /)
    expect(rows[0]).toMatch(/ALB/)
    expect(rows[1]).toMatch(/REN/)
  })

  // An empty answer is how a contest declines a contact it cannot express — a blank
  // 'QSO:' line would claim it anyway, with no exchange for the checker to match.
  it('writes no row when the contest claims none', () => {
    const content = qsonToCabrillo([qso], { headers: [], qsoParts: () => [] })
    expect(content.split('\n').filter((line) => line.startsWith('QSO:'))).toEqual([])
  })

  // Breaks and deleted records live in the same log as the contacts. Written out, they
  // become QSOs the operator never made — over-claiming, which a checker penalizes.
  it('skips event rows and deleted records', () => {
    const content = qsonToCabrillo(
      [{ band: 'event', event: { event: 'break' } }, { ...qso, deleted: true }, qso],
      { headers: [], qsoParts: () => ['N0DEV', 'K1ABC'] }
    )
    expect(content.split('\n').filter((line) => line.startsWith('QSO:')).length).toEqual(1)
  })

  // The end time is the fallback because an imported record may carry only that; a
  // contact stamped with neither would otherwise be dated by whatever `new Date()`
  // answers at export time, which is not when it happened.
  it('dates a contact by its start time, falling back to its end time', () => {
    const ended = { band: '20m', mode: 'SSB', endAtMillis: Date.UTC(2026, 9, 17, 23, 59) }
    const content = qsonToCabrillo([ended], { headers: [], qsoParts: () => ['N0DEV', 'K1ABC'] })
    expect(content).toContain('2026-10-17 2359')
  })
})
