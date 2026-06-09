import { partsForFreq, parseFreq, fmtFreq } from './frequency'

describe('fmtFreq', () => {
  it('should convert MHz to a nice formatting', () => {
    expect(fmtFreq(7125)).toEqual('7.125')
    expect(fmtFreq(7125, { mode: 'compact' })).toEqual('7.125')
    expect(fmtFreq(7125, { mode: 'full' })).toEqual('7.125.000')
    expect(fmtFreq(7125.100)).toEqual('7.125.100')
    expect(fmtFreq(7125.100, { mode: 'compact' })).toEqual('7.125.')
    expect(fmtFreq(7125.100, { mode: 'full' })).toEqual('7.125.100')
    expect(fmtFreq(146520.125)).toEqual('146.520.125')
    expect(fmtFreq(146520.125, { mode: 'compact' })).toEqual('146.520.')
    expect(fmtFreq(146520.125, { mode: 'full' })).toEqual('146.520.125')
  })
})

describe('partsForFreq', () => {
  it('should convert MHz to a nice formatting', () => {
    expect(partsForFreq(7125)).toEqual(['7', '125', '000'])
    expect(partsForFreq(7125.100)).toEqual(['7', '125', '100'])
    expect(partsForFreq(146520.125)).toEqual(['146', '520', '125'])
  })
})

describe('parseFreq', () => {
  it('should convert strings to kHz', () => {
    expect(parseFreq('7125')).toEqual(7125)
    expect(parseFreq('7.125')).toEqual(7125)
    expect(parseFreq('7,125')).toEqual(7125)
    expect(parseFreq('7125.500')).toEqual(7125.500)
    expect(parseFreq('7125,500')).toEqual(7125.500)
    expect(parseFreq('7.125.500')).toEqual(7125.500)
    expect(parseFreq('146.520.500')).toEqual(146520.500)
  })
  it('should handle short forms of frequencies', () => {
    expect(parseFreq('14652')).toEqual(146520)
    expect(parseFreq('22252')).toEqual(222520)
    expect(parseFreq('44265')).toEqual(442650)
  })
  it('should round numbers to kHz with 3 decimals', () => {
    expect(String(parseFreq(7125.000001))).toEqual('7125')
    expect(String(parseFreq(7125.123567))).toEqual('7125.124')
    expect(String(parseFreq(7125.999999))).toEqual('7126')
    expect(String(parseFreq(7125.99354))).toEqual('7125.994')
    expect(String(parseFreq('7125.000001'))).toEqual('7125')
    expect(String(parseFreq('7125.123567'))).toEqual('7125.124')
    expect(String(parseFreq('7125.999999'))).toEqual('7126')
    expect(String(parseFreq('7125.99354'))).toEqual('7125.994')
  })
})
