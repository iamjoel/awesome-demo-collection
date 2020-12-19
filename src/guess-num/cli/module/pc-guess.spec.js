import inquirer from 'inquirer'
const promptPrompt = inquirer.prompt

import {getNum, ask, genGuessNum, getExpectCheckRes, CHECK_RES_TYPE} from './pc-guess.js'

describe('getNum', () => {
  test('should return num if num is valid', async () => {
    inquirer.prompt = () => Promise.resolve({targetNum: 30})
    const num = await getNum()
    expect(num).toBe(30)
    inquirer.prompt = promptPrompt
  })
})

describe('ask', () => {
  test('should return true if guessed', async () => {
    inquirer.prompt = () => Promise.resolve({userCheckRes: CHECK_RES_TYPE.CORRECT})
    const res = await ask(50)// 第一次就猜对
    expect(res).toBe(true)
    inquirer.prompt = promptPrompt
  })
})

describe('genGuessNum', () => {
  test('should return average number', () => {
    expect(genGuessNum(1,5)).toBe(3)
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