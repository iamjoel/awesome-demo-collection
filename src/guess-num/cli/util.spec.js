import {check} from './utils'
describe('check', () => {
  test('should return big info if input big num', () => {
    const res = check({
      targetNum: 3,
      guessNum: 4,
      min: 1,
      max: 5
    })
    expect(res).toEqual({
      isGuessed: false,
      msg: '大了',
      min: 1,
      max: 4
    })
  })

  test('should return min info if input min num', () => {
    const res = check({
      targetNum: 4,
      guessNum: 3,
      min: 1,
      max: 5
    })
    expect(res).toEqual({
      isGuessed: false,
      msg: '小了',
      min: 3,
      max: 5
    })
  })

  test('should return equal info if input equal num', () => {
    const res = check({
      targetNum: 4,
      guessNum: 4,
      min: 1,
      max: 5
    })
    expect(res).toEqual({
      isGuessed: true
    })
  })
})