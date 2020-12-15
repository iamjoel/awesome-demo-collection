import inquirer from 'inquirer'
import guess from './module/guess.js'
import question from './module/question.js'

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
          name: '我猜',
          value: GAME_TYPE.guess
        },
        {
          name: '电脑猜',
          value: GAME_TYPE.question
        },
      ]
    }
  ])
  return type
}