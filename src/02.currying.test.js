
import { curry } from './02.currying.js'

/*
function sum(a, b, c) {
    console.log(a + b + c);
}

const fn = curry(sum);
// 测试用例
fn(1, 2, 3); // 6
fn(1, 2)(3); // 6
fn(1)(2, 3); // 6
fn(1)(2)(3); // 6
*/
const sum = (a, b, c) => {
  return a + b + c
}

test('02-科里化 fn(1, 2, 3)', () => {
  const fn = curry(sum)
  expect(fn(1, 2, 3)).toBe(6)
})

test('02-科里化 fn(1)(2)(3)', () => {
  const fn = curry(sum)
  expect(fn(1)(2)(3)).toBe(6)
})

test('02-科里化 fn(1, 2, 3)', () => {
  const fn = curry(sum)
  expect(fn(1, 2, 3)).toBe(6)
})
