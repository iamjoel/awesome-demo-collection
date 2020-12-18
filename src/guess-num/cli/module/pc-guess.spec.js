import {genGuessNum, getExpectCheckRes, CHECK_RES_TYPE} from './pc-guess.js'
describe('genGuessNum', () => {
  test('should return average number', () => {
    expect(genGuessNum(1,5)).toBe(3)
    expect(genGuessNum(1,6)).toBe(3)
  })
})

describe('getExpectCheckRes', () => {
  test('should return small number', () => {
  })
})