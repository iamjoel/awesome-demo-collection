export function check ({ targetNum, guessNum, min, max }) {
  const isGuessed = targetNum === guessNum
  if (isGuessed) {
    return {
      isGuessed
    }
  }

  let msg
  const range = {}
  if (guessNum > targetNum) {
    msg = '大了'
    range.min = min
    range.max = guessNum
  } else {
    msg = '小了'
    range.min = guessNum
    range.max = max
  }
  return {
    isGuessed,
    msg,
    ...range
  }
}

export function isValidNum (value, min, max) {
  if (value === undefined || value === '') {
    return '输入值不能为空'
  } else if (!/^\d*$/.test(value)) {
    return '输入值不是合法的整数'
  } else {
    value = parseInt(value, 10)
    if (value < min || value > max) {
      return `输入值必须在 ${min} 和 ${max} 之间`
    }
    return true
  }
}
