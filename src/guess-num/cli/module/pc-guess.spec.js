import inquirer from 'inquirer'
const promptPrompt = inquirer.prompt
import guessMain, {getNum, guess, genGuessNum, getExpectCheckRes, CHECK_RES_TYPE} from './pc-guess.js'

describe('main', () => {
  test('should main return true if guessed', async () => {
    inquirer.prompt = () => Promise.resolve({userCheckRes: CHECK_RES_TYPE.CORRECT})
    const res = await guessMain(50)
    expect(res).toBe(true)
    inquirer.prompt = promptPrompt
  })
})

describe('getNum', () => {
  test('should return num if num is valid', async () => {
    inquirer.prompt = () => Promise.resolve({targetNum: 30})
    const num = await getNum()
    expect(num).toBe(30)
    inquirer.prompt = promptPrompt
  })
})

describe('guess', () => {
  test('should return guessed res if guessed', async () => {
    inquirer.prompt = () => Promise.resolve({userCheckRes: CHECK_RES_TYPE.CORRECT})
    const {isGuessed} = await guess(50, 1, 100)
    expect(isGuessed).toBe(true)
    inquirer.prompt = promptPrompt
  })
  test('should return not guessed res if not guessed', async () => {
    inquirer.prompt = () => Promise.resolve({userCheckRes: CHECK_RES_TYPE.SMALL})
    const {isGuessed} = await guess(90, 1, 100)
    expect(isGuessed).toBe(false)

    inquirer.prompt = () => Promise.resolve({userCheckRes: CHECK_RES_TYPE.BIG})
    const {isGuessed: isGuessed2} = await guess(10, 1, 100)
    expect(isGuessed2).toBe(false)

    inquirer.prompt = promptPrompt
  })
})

describe('genGuessNum', () => {
  test('should return average number', () => {
    expect(genGuessNum(1,5)).toBe(3)
    expect(genGuessNum(5,1)).toBe(3)
    expect(genGuessNum(1,6)).toBe(3)
  })
})

describe('getExpectCheckRes', () => {
  test('should return small res if guess num is smaller than target num', () => {
    expect(getExpectCheckRes(3, 100)).toBe(CHECK_RES_TYPE.SMALL)
  })

  test('should return big res if guess num is bigger than target num', () => {
    expect(getExpectCheckRes(3, 1)).toBe(CHECK_RES_TYPE.BIG)
  })

  test('should return correct res  if guess num is equal to target num', () => {
    expect(getExpectCheckRes(3, 3)).toBe(CHECK_RES_TYPE.CORRECT)
  })
})