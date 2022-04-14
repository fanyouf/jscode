const arr = new Array(10)
for (let i = 0; i < arr.length; i++) {
  arr[i] = Math.ceil(100 * Math.random())
}

function swap (arr, i, j) {
  const t = arr[i]
  arr[i] = arr[j]
  arr[j] = t
}
function f (arr) {
  console.log('f...', arr.toString())
  const key = 0
  let left = key
  let right = arr.length - 1
  // if (left >= right) {
  //   return key
  // }
  let i = 1
  while (right > left) {
    console.log(i++, arr.toString(), 'left ', left, 'right ', right)

    while (right > left && arr[left] <= arr[key]) {
      left++
    }
    while (right > left && arr[right] >= arr[key]) {
      right--
    }
    console.log('left ', left, 'right ', right, arr.toString())

    swap(arr, right, left)
    console.log(arr.toString())
  }

  swap(arr, left, key)
  console.log('快排结束', arr.toString())

  return left
}
// const p = f(arr, 0, arr.length - 1)
// console.log(p)
function qsort (arr) {
  if (arr.length === 0 || arr.length === 1) {
    return arr
  }
  if (arr.length === 2) {
    return arr[0] > arr[1] ? [arr[1], arr[0]] : [arr[0], arr[1]]
  }

  const idx = f(arr)
  console.log('快排', idx, arr.toString())

  return [...qsort(arr.slice(0, idx)), arr[idx], ...qsort(arr.slice(idx + 1))]
  // while (left < right) {
  //   const indx = f(arr, left, right)
  //   qsort(arr, 0, indx - 1)
  //   qsort(arr, indx + 1, arr.lenght - 1)
  // }
  // return arr
}
// const s = qsort(arr)
// console.log('s', s.toString())
console.log(f([3, 4, 5, 1]))
