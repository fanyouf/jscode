function checkRepeat (arr = []) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== i) {
      return true
    }
  }
  return false
}

function checkRepeat1 (arr = []) {
  return Array.from(new Set(arr)).length !== arr.length
}

export {
  checkRepeat,
  checkRepeat1
}
