/**
 * 字符串替换
 * @param {string} str 源字符串
 * @param {string} key 要替换的关键字
 * @returns 替换之后的字符串
 *
 * e.g:
 *    str: Js高阶函数JS
 *    key: js
 *    highLight(str,key) ====> <span>Js</span>高阶函数<span>JS</span>
 */
const highLight = (str, key) => {
  const newStr = str.replace(new RegExp(key, 'ig'), (result) => {
    console.log('result', result)
    return '<span>' + result + '</span>'
  })
  return newStr
}
export { highLight }
