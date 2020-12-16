import inquirer from 'inquirer'
import chalk from 'chalk'
import figlet from 'figlet'

import {MIN, MAX} from '../config.js'
import {check} from '../utils.js'
let min = MIN
let max = MAX

function guess() {
  const targeNum = genRandomNum()
  // console.log(targeNum)
  ask(targeNum)
}

export function genRandomNum() {
  return Math.round(Math.random() * MAX)
}

async function ask(targetNum) {
  // TODO: mock inquirer.prompt
  let { guessNum } = await inquirer.prompt([
    {
      type: 'input',
      name: 'guessNum',
      message: `请输入你猜的数字(${min} - ${max})`,
      validate(value) {
        if(value === '') {
          return '输入值不能为空'
        } else if(!/^\d*$/.test(value)) {
          return '输入值不是合法的整数'
        } else if(value < min || value > max) {
          return `输入值必须在 ${min} 和 ${max} 之间`
        }
        return true
      }
    }
  ])
  guessNum = parseInt(guessNum, 10)
  let {isGuessed, isError, ...rest} = check({
    targetNum,
    guessNum,
    min,
    max,
  })
  if(isGuessed) {
    // 中文不显示
    figlet('Congratulations! 猜对拉', (err, data) => {
      console.log(chalk.green('恭喜猜对拉~'))
      if(err) {
        return
      }
      console.log(chalk.green(data))
    })
    return
  } else {
      min = rest.min
      max = rest.max
      console.log(rest.msg)
      await ask(targetNum)
  }
}



export default guess