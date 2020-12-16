import inquirer from 'inquirer'
import chalk from 'chalk'

import {MIN, MAX} from '../config.js'
let min = MIN
let max = MAX

const CHECK_RES_TYPE = {
  SMALL: 'small',
  BIG: 'big',
  CORRECT: 'correct'
}

async function question() {
  const targetNum = await getNum()
  ask(targetNum)
}

async function getNum() {
  const {targetNum } = await inquirer.prompt([
    {
      type: 'input',
      name: 'targetNum',
      message: '输入要猜的数字',
      validate(value) {
        return value === '' ? '不能为空' : true
      }
    }
  ])
  return targetNum
}

async function ask(targetNum) {
  const guessNum = genGuessNum(min, max)
  const expectCheckRes = getExpectCheckRes(guessNum, targetNum)

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
  
  if(expectCheckRes !== userCheckRes) {
    console.log(chalk.red('选错了'))
    ask(targetNum)
    return
  }

  if(expectCheckRes === CHECK_RES_TYPE.CORRECT) {
    console.log(chalk.green('我猜对喽~'))
    return
  } else {
    if(guessNum > targetNum) {
      max = guessNum
    } else {
      min = guessNum
    }
    ask(targetNum)
  }
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

export default question