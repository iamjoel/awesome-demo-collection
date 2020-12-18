import {check, isValidNum} from './utils'
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

describe('isValidNum', () => {
  test('should return empty info if input empty', () => {
    expect(isValidNum()).toBe('输入值不能为空')
    expect(isValidNum('')).toBe('输入值不能为空')
  })

  test('should return invalid info if input invalid num', () => {
    expect(isValidNum('abc')).toBe('输入值不是合法的整数')
    expect(isValidNum('3.5')).toBe('输入值不是合法的整数')
    expect(isValidNum('-1')).toBe('输入值不是合法的整数')
  })

  test('should return not in range info if input not in range num', () => {
    const min = 1
    const max = 100
    const expectMes = `输入值必须在 ${min} 和 ${max} 之间`
    expect(isValidNum(min - 1, min, max)).toBe(expectMes)
    expect(isValidNum(max + 1, min, max)).toBe(expectMes)
    expect(isValidNum(min - 1 + '', min, max)).toBe(expectMes)
    expect(isValidNum(max + 1 + '', min, max)).toBe(expectMes)
  })

  test('should return true info if input valid num', () => {
    const min = 1
    const max = 100
    expect(isValidNum(min + 1, min, max)).toBe(true)
    expect(isValidNum(max - 1, min, max)).toBe(true)
  })
})