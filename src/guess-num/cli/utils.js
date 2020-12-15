export function check({targetNum, guessNum, min, max}) {
  const isGuessed = targetNum === guessNum
  if(isGuessed) {
    return {
      isGuessed
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