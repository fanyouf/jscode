
// for in : 数组
// for ... in 循环返回的值都是数据结构的 键值名。
// 遍历对象返回的对象的key值,遍历数组返回的数组的下标(key)。
// for ... in 循环不仅可以遍历自有键名,还会遍历原型上的可枚举的值，
// 哪怕是Object.prototype上的可枚举属性

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

  f(1, 2, 3)
}

{
  Object.prototype.objCustom = function () {}
  Array.prototype.arrCustom = function () {}

  const iterable = [3, 5, 7]
  iterable.foo = 'hello'

  for (const i in iterable) {
    console.log(i) //  0, 1, 2, "foo", "arrCustom", "objCustom"
  }
}

{
  const obj = { a: 1, b: 2 }
  for (const i in obj) {
    console.log(i)
  }

  for (const i of obj) {
    console.log(i)
  }
}
