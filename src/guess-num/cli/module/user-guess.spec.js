import guessMain, { genRandomNum, guess} from './user-guess.js'
import {MIN, MAX} from '../config.js'
import inquirer from 'inquirer'
const promptPrompt = inquirer.prompt

describe('main', () => {
  test('should main return true if guessed', async () => {
    inquirer.prompt = () => Promise.resolve({guessNum: 30})
    const res = await guessMain(30)
    expect(res).toBe(true)
    inquirer.prompt = promptPrompt
  })
})
describe('genRandomNum', () => {
  test('should return random number between min and max', () => {
    const num = genRandomNum()
    expect(num >= MIN).toBe(true)
    expect(num <= MAX).toBe(true)
  })
})

describe('guess', () => {
  afterEach(() => {
    inquirer.prompt = promptPrompt
  })
  test('should return small res if guess num is smaller than target num', async () => {
    inquirer.prompt = () => Promise.resolve({guessNum: 10})
    const {isGuessed, min, max} = await guess(90, 1, 100)
    expect(isGuessed).toBe(false)
    expect(min).toBe(10)
    expect(max).toBe(100)
  })

  test('should return big res if guess num is bigger than target num', async () => {
    inquirer.prompt = () => Promise.resolve({guessNum: 99})
    const {isGuessed, min, max} = await guess(90, 1, 100)
    expect(isGuessed).toBe(false)
    expect(min).toBe(1)
    expect(max).toBe(99)
  })

  test('should return correct res if guess num is equal to target num', async () => {
    inquirer.prompt = () => Promise.resolve({guessNum: 30})
    const {isGuessed} = await guess(30, 1, 100)
    expect(isGuessed).toBe(true)
  })
})

