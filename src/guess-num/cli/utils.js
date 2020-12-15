export function check({targetNum, guessNum, min, max}) {
  // TODO: 逻辑有问题
  const isGuessed = targetNum === guessNum
  if(isGuessed) {
    return {
      isGuessed
    }
  }

  if(guessNum < min || guessNum > max) {
    return {
      isGuessed,
      isError: true,
      msg: `非法的数字: ${guessNum}。数字只能在 ${min} 和 ${max} 之间!`
    }
  }

  let msg
  const range = {}
  if(guessNum > targetNum) {
    msg = '大了'
    range.min = min
    range.max = guessNum
  } else  {
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