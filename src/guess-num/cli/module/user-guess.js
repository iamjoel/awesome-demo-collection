import inquirer from 'inquirer'
import chalk from 'chalk'
import { check, isValidNum } from '../utils.js'
import { MIN, MAX } from '../config.js'

async function main (num) {
  const targeNum = num || genRandomNum()
  let isGuessed = false
  let min = MIN
  let max = MAX
  while (!isGuessed) {
    let res = await guess(targeNum, min, max)
    isGuessed = res.isGuessed
    min = res.min
    max = res.max
    if (isGuessed) {
      console.log(chalk.green('恭喜猜对拉~'))
    } else {
      console.log(chalk.yellow(res.msg))
    }
  }
  return true
}

export function genRandomNum () {
  return Math.round(Math.random() * MAX)
}

export async function guess (targetNum, min, max) {
  let { guessNum } = await inquirer.prompt([
    {
      type: 'input',
      name: 'guessNum',
      message: `请输入你猜的数字(${min} - ${max})`,
      validate (value) {
        return isValidNum(value, min, max)
      }
    }
  ])
  guessNum = parseInt(guessNum, 10)
  let res = check({
    targetNum,
    guessNum,
    min,
    max
  })
  return res
}

export default main
