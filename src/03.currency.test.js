
import { currency } from './03.currency'

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

test('currency(123456)', () => {
  const res = currency(123456)
  expect(res).toBe('$123,456.00')
})
