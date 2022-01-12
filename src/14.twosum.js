function random (num = 100, start = -100, end = 100) {
  // 随机数组

  const total = end - start
  const arr = Array(num).fill(undefined).map((it) => {
    return Math.ceil(Math.random() * total) - end
  })
  return arr
}

function twoSum (arr, sum = 10) {
  // 统计字典
  const map = {}
  arr.forEach((it) => {
    map[it] = map[it] ? map[it] + 1 : 1
  })
  const res = []

  for (const k in arr) {
    const sum_k = sum - k
    if (map[k] && map[sum_k]) {
      res.push([1 * k, sum_k])
      // 数据-1
      map[k]--
      map[sum_k]--
    }
  }

  return res
}

const arr = random()
const res = twoSum(arr)
console.log('res', res)
