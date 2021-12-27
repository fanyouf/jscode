/**
 * 对象扁平化
 * @param {*} obj 要扁平化的对象
 * @returns 扁平haul的结果
 */
function flatten (obj) {
  // 你的代码
  const f = (obj, res = {}, isArray = false, curKey = '') => {
    Object.entries(obj).forEach(([key, value]) => {
      const nextKey = isArray
        ? (curKey ? curKey + '[' + key + ']' : key)
        : (curKey ? curKey + '.' + key : key)

      if (typeof value !== 'object') {
        res[nextKey] = value
      } else {
        // isArray =
        f(value, res, Array.isArray(value), nextKey)
      }
    })
  }

  const res = {}
  f(obj, res)

  return res
}

export {
  flatten
}
