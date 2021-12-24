
import { compose } from './01.compose.js'

/*
 如果一个值要经过多个函数，才能变成另外一个值，就可以把所有中间步骤合并成一个函数，这叫 做"函数的合成"（compose）。
 合成的好处：
 它让代码变得简单而富有可读性，通过不同的组合方式，我们可以轻易组合出其他常用函数，让我们的代码更具表现力

 格式：
    组合函数(工具函数1，工具函数2, 工具函数3, ... ) ====> 新工具函数
*/
const add = (x, y) => x + y
const square = x => x * x

test('函数复合', () => {
  const fn = compose(add, square, square)
  const res = fn(1, 2)
  expect(res).toBe(81)
})
