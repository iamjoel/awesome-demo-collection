import inquirer from 'inquirer'
import chalk from 'chalk'
import {isValidNum} from '../utils.js'
import {MIN, MAX} from '../config.js'

export const CHECK_RES_TYPE = {
  SMALL: 'small',
  BIG: 'big',
  CORRECT: 'correct'
}

async function main(number) {
  const targetNum = number || await getNum()
  let isGuessed = false
  let min = MIN
  let max = MAX
  while(!isGuessed) {
    const res = await guess(targetNum, min, max)
    isGuessed = res.isGuessed
    min = res.min
    max = res.max
  }
  return true
}

export async function getNum() {
  const {targetNum } = await inquirer.prompt([
    {
      type: 'input',
      name: 'targetNum',
      message: '输入要猜的数字',
      validate(value) {
        return isValidNum(value, MIN, MAX)
      }
    }
  ])
  return targetNum
}

export async function guess(targetNum, min, max) {
  const guessNum = genGuessNum(min, max)
  const expectCheckRes = getExpectCheckRes(guessNum, targetNum)

  await checkUserChoose(expectCheckRes, guessNum)

  if(expectCheckRes === CHECK_RES_TYPE.CORRECT) {
    console.log(chalk.green('我猜对喽~'))
    return {isGuessed: true}
  } else {
    if(guessNum > targetNum) {
      max = guessNum
    } else {
      min = guessNum
    }
    return {isGuessed: false, min, max}
  }
}

export async function checkUserChoose(expect, guessNum) {
  const { userCheckRes } = await inquirer.prompt([
    {
      type: 'list',
      name: 'userCheckRes',
      message: `我猜是 ${guessNum}`,
      choices: [
        {
          name: '大了',
          value: CHECK_RES_TYPE.BIG
        },
        {
          name: '小了',
          value: CHECK_RES_TYPE.SMALL
        },
        {
          name: '答对了',
          value: CHECK_RES_TYPE.CORRECT
        }
      ]
    }
  ])
  if(userCheckRes !== expect) {
    console.log(chalk.red('选错了'))
    await checkUserChoose(expect, guessNum)
  }
  return true
}

export function getExpectCheckRes(guessNum, targetNum) {
  if(guessNum > targetNum) {
    return CHECK_RES_TYPE.BIG
  } else if(guessNum < targetNum) {
    return CHECK_RES_TYPE.SMALL
  } else {
    return CHECK_RES_TYPE.CORRECT
  }
}

// 用二分法来猜
export function genGuessNum(min, max) {
  let guessNum
  if(max < min) {
    [min, max] = [max, min]
  }
  guessNum = Math.floor((min + max) / 2)
  return guessNum
}

export default main