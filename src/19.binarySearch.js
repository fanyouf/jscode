/**
 * 二分查找法
 * 给定一个 n 个元素的 升序 整型数组 arr 和一个目标值 num
 * 写一个函数搜索 arr 中的 num, 如果目标值存在返回下标，否则返回 -1。
 * @param {number[]} arr
 * @param {number} num
 * @returns
 */
const binarySearch = (arr, num) => {
  let start = 0
  let end = arr.length - 1
  while (end >= start) {
    const cur = Math.floor((start + end) / 2)
    const _t = arr[cur]
    // 找到了就返回下标
    if (_t === num) {
      return cur
    }
    _t > num
      ? end = cur - 1 // -1， +1 很关键，因为已经排除了cur是目标的可能
      : start = cur + 1
  }
  return -1
}

const arr = [1, 2, 3, 4, 5]
console.log(binarySearch(arr, 1)) // 0
console.log(binarySearch(arr, 2)) // 1
console.log(binarySearch(arr, 3)) // 2
console.log(binarySearch(arr, 4)) // 3
console.log(binarySearch(arr, 5)) // 4
console.log(binarySearch(arr, 6)) // -1
