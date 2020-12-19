import inquirer from 'inquirer'
import chalk from 'chalk'
import figlet from 'figlet'
import {check, isValidNum} from '../utils.js'
import {MIN, MAX} from '../config.js'
let min = MIN
let max = MAX

function guess() {
  const targeNum = genRandomNum()
  ask(targeNum)
}

export function genRandomNum() {
  return Math.round(Math.random() * MAX)
}

async function ask(targetNum) {
  let { guessNum } = await inquirer.prompt([
    {
      type: 'input',
      name: 'guessNum',
      message: `请输入你猜的数字(${min} - ${max})`,
      validate(value) {
        return isValidNum(value, min, max)
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