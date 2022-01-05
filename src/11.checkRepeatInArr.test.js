import { checkRepeat, checkRepeat1 } from './11.checkRepeatInArr'

test('checkRepeat', () => {
  const arr = [1, 2, 1]
  expect(checkRepeat(arr)).toBe(true)
})

test('checkRepeat1', () => {
  const arr = [1, 2, 1]
  expect(checkRepeat1(arr)).toBe(true)
})
