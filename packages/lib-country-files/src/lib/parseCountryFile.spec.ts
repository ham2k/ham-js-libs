import { parseCountryFile } from './parseCountryFile'
import fs from 'fs'

/* eslint-disable n/handle-callback-err */
const ctyCSV = fs.readFileSync('data/bigcty-20260530.csv', 'utf8')

describe('parseCountryFile', () => {
  it('should work', () => {
    const cty = parseCountryFile(ctyCSV)
    expect(Object.values(cty.entities).length).toEqual(346)

    expect(cty)
  })
})


// The country file states longitude and UTC offset west-positive; passed
// through, Monaco sits in the Atlantic and an offset reads backwards to every
// consumer that takes it at face value.
describe('parseCountryFile signs', () => {
  const cty = parseCountryFile(ctyCSV)

  it('states longitude east-positive', () => {
    expect(cty.entities['3A'].lon).toEqual(7.4)
    expect(cty.entities.K.lon).toEqual(-91.87)
    expect(cty.entities['3D2'].lon).toEqual(177.92)
  })

  it('states the UTC offset with its ordinary sign', () => {
    expect(cty.entities['3A'].tz).toEqual('GMT+1')
    expect(cty.entities.K.tz).toEqual('GMT-5')
    expect(cty.entities['3D2'].tz).toEqual('GMT+12')
    expect(cty.entities.G.tz).toEqual('GMT0')
  })
})
