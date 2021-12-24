function curry (func, curArg = []) {
  return function (...arg) {
    arg = curArg.concat(arg)
    if (arg.length >= func.length) {
      return func.apply(null, arg)
    } else {
      return curry(func, arg)
    }
  }
}

export {
  curry
}
