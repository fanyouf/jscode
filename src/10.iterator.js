// for of : 数组
// for in : 数组
// for ... in 循环返回的值都是数据结构的 键值名。
// 遍历对象返回的对象的key值,遍历数组返回的数组的下标(key)。
// for ... in 循环不仅可以遍历数字键名,还会遍历原型上的值和手动添加的其他键。如——例3
// 特别情况下, for ... in 循环会以看起来任意的顺序遍历键名

{
  const arr = ['a', 'b']
  arr.age = 18
  for (const i of arr) {
    console.log(i)
  }

  for (const i in arr) {
    console.log(i)
  }

  for (const i in 'abcd') {
    console.log(i)
  }
  for (const i in (new Map())) {
    console.log(i)
  }

  function f () {
    for (const i in arguments) {
      console.log(i)
    }
  }

  const obj = {
    a: 1,
    b: 2,
    c: 3
  }

  for (const i of Object.values(obj)) {
    console.log(i)
    // 1
    // 2
    // 3
  }

//   f(1, 2, 3)
}

// {
//   const obj = { a: 1, b: 2 }
//   for (const i in obj) {
//     console.log(i)
//   }

//   for (const i of obj) {
//     console.log(i)
//   }
// }
