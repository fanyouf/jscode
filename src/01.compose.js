// const compose = (...[first, ...other]) => (...args) => {
//   let ret = first(...args)
//   other.forEach(fn => {
//     ret = fn(ret)
//   })
//   return ret
// }

const compose = (...funcs) => {
  if (funcs.length === 0) {
    return arg => arg
  } else if (funcs.length === 1) {
    return funcs[0]
  } else {
    return funcs.reduce((a, b) => {
      return (...arg) => {
        return b(a(...arg))
      }
    })
  }
}

export {
  compose
}
