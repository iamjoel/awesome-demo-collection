import inquirer from 'inquirer'
import guess from './module/user-guess.js'
import question from './module/pc-guess.js'

const GAME_TYPE = {
  guess: 'guess',
  question: 'question'
}

main()

async function main() {
  const type = await chooseGameType()
  if(type === GAME_TYPE.guess) {
    guess()
  } else {
    question()
  }
}

async function chooseGameType() {
  const { type} = await inquirer.prompt([
    {
      type: 'list',
      name: 'type',
      choices: [
        {
          name: '我猜，电脑出数字',
          value: GAME_TYPE.guess
        },
        {
          name: '电脑猜，我出数字',
          value: GAME_TYPE.question
        },
      ]
    }
  ])
  return type
}