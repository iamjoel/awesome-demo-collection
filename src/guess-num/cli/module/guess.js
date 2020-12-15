import inquirer from 'inquirer'
import {MIN, MAX} from '../config.js'
import {check} from '../utils.js'
let min = MIN
let max = MAX

function guess() {
  const targeNum = genRandomNum()
  console.log(targeNum)
  ask(targeNum)
}

export function genRandomNum() {
  return Math.round(Math.random() * MAX)
}

async function ask(targeNum) {
  let { guessNum } = await inquirer.prompt([
    {
      type: 'input',
      name: 'guessNum',
      message: `请输入你猜的数子(${min} - ${max})`,
      validate(value) {
        return value === '' ? '不能为空' : true
      }
    }
  ])
  guessNum = parseInt(guessNum, 10)
  let {isGuessed, isError, ...rest} = check({
    targeNum,
    guessNum,
    min,
    max,
  })
  if(isGuessed) {
    console.log('恭喜猜对拉~')
    return
  } else {
    if(isError) {
      console.log(rest.msg)
      await ask()
    } else {
      min = rest.min
      max = rest.max
      console.log(rest.msg)
      await ask()
    }
  }
}



export default guess