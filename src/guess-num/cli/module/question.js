import inquirer from 'inquirer'

async function question() {
  const targeNum = await getNum()
  console.log(targeNum)
}

async function getNum() {
  const {targetNum } = await inquirer.prompt([
    {
      type: 'input',
      name: 'targetNum',
      message: '输入数字',
      validate(value) {
        return value === '' ? '不能为空' : true
      }
    }
  ])
  return targetNum
}

export default question