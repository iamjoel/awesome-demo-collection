import inquirer from 'inquirer'
import userGuess from './module/user-guess.js'
import pcGuess from './module/pc-guess.js'

const GAME_TYPE = {
  userGuess: 'userGuess',
  pcGuess: 'pcGuess'
}

main()

async function main() {
  const type = await chooseGameType()
  if(type === GAME_TYPE.userGuess) {
    userGuess()
  } else {
    pcGuess()
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
          value: GAME_TYPE.userGuess
        },
        {
          name: '电脑猜，我出数字',
          value: GAME_TYPE.pcGuess
        },
      ]
    }
  ])
  return type
}