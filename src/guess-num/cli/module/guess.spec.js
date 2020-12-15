// 支持 ESModule
// https://jestjs.io/docs/en/ecmascript-modules
// https://stackoverflow.com/questions/35756479/does-jest-support-es6-import-export
import { genRandomNum } from './guess.js'
import {MIN, MAX} from '../config.js'

describe('genRandomNum', () => {
  test('should return random number between min and max', () => {
    const num = genRandomNum()
    expect(num >= MIN).toBe(true)
    expect(num <= MAX).toBe(true)
  })
})