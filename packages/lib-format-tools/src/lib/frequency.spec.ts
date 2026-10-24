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
  it('should read the last of several marks as the decimal', () => {
    expect(parseFreq('14.200.5')).toEqual(14200.5)
    expect(parseFreq('14.200.505')).toEqual(14200.505)
    expect(parseFreq('14,285.5')).toEqual(14285.5)
    expect(parseFreq('432.100.000')).toEqual(432100)
    // A display string reads back as the frequency it shows.
    for (const freq of [7200.5, 14074.25, 146520, 432100.5, 1296000, 10368100.5]) {
      expect(parseFreq(fmtFreq(freq))).toEqual(freq)
    }
  })
  it('should pick the reading that names a band', () => {
    // A thousandfold wrong is a different band, and the radio tunes there.
    expect(parseFreq('146.52')).toEqual(146520)
    expect(parseFreq('472.5')).toEqual(472.5)
    expect(parseFreq('136,5')).toEqual(136.5)
    expect(parseFreq('1.296')).toEqual(1296000)
    expect(parseFreq('10.368')).toEqual(10368000)
    expect(parseFreq('1.296.000')).toEqual(1296000)
    expect(parseFreq('1,296,000')).toEqual(1296000)
    expect(parseFreq('10.368.100')).toEqual(10368100)
    // How fmtFreq writes them: MHz.kHz, read as kHz they are no band.
    expect(parseFreq('1296.000')).toEqual(1296000)
    expect(parseFreq('1296,2')).toEqual(1296200)
    expect(parseFreq('10368.100')).toEqual(10368100)
    expect(parseFreq('14285.5')).toEqual(14285.5)
    expect(parseFreq('5.0')).toEqual(5000)
  })
  it('should not let a microwave reading take an HF band or a band name', () => {
    // 30m read as MHz sits inside 3cm read as GHz, 3.5 is 80m, and `1.25`
    // is the 1.25m band before it is 1.25 GHz.
    expect(parseFreq('10.125')).toEqual(10125)
    expect(parseFreq('10.125.000')).toEqual(10125)
    expect(parseFreq('10125.000')).toEqual(10125)
    expect(parseFreq('3.5')).toEqual(3500)
    expect(parseFreq('1.25')).toEqual(1250)
    expect(parseFreq('1,25')).toEqual(1250)
  })
  it('should refuse a group that cannot be grouping', () => {
    expect(parseFreq('14.2.5')).toBeNull()
    expect(parseFreq('1.4.200')).toBeNull()
    expect(parseFreq('14..285')).toBeNull()
    expect(parseFreq('14285.200.5')).toBeNull()
    expect(parseFreq('.285.5')).toBeNull()
    expect(parseFreq('14.285.')).toBeNull()
  })
  it('should handle short forms of frequencies', () => {
    expect(parseFreq('14652')).toEqual(146520)
    expect(parseFreq('22252')).toEqual(222520)
    expect(parseFreq('44265')).toEqual(442650)
    // Not where the marks already place the kHz: 14.652 MHz.
    expect(parseFreq('14.652.000')).toEqual(14652)
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
