/**
 *
 * @param {*} value 金额
 * @param {*} _currency 货币符号
 * @returns
 */
const currency2 = (value, _currency) => {
  // 全局匹配： 三位连续，且之后也是数值 的数值
  const digitsRE = /(\d{3})(?=\d)/g

  // 转成浮点数
  value = parseFloat(value)
  if (!isFinite(value) || (!value && value !== 0)) {
    return ''
  }
  // 确定符号位
  _currency = _currency != null ? _currency : '$'

  // 保留两位小数，并整体转成字符串
  const stringified = Math.abs(value).toFixed(2)

  // 获取整数部分。-3表示倒数3位的位置
  const _int = stringified.slice(0, -3)

  // 整数部分以3为基准长度划分，剩下几位
  const i = _int.length % 3

  // 取出头部。
  // 模几就从头部裁剪几位，从而让剩下的部分的长度能被3整除
  // 并补充逗号
  // 如：12345    ----> 12,
  const head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : ''

  // 取出小数点部分
  // 如：12345.67 ----> .67
  const _float = stringified.slice(-3)

  // 符号位
  const sign = value < 0 ? '-' : ''

  // 整体输出
  return _currency + sign + head + _int.slice(i).replace(digitsRE, '$1,') + _float
}

// 另一个漂亮的正则表达 xxx.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
// 解析如下：

// 整体是对字符串进行全局替换；
// \B： 表示非边界。这里可以认为是1和2之间，3和4之间的间隙(那些个不存在的东东)。如果不写后的部分，
// 则它会把字符串替换成1,2,3,4,5,6,7,8,9,0,也就是把间隙全给填上","。要注意的是1和0前后是有边界的。
// ?= 表示 前瞻。exp1(?=exp2)表示查找exp2前面的exp1。
// \d{3}表示必须是三个连续的数值
// (\d{3})+表示三个连续的数值可以重复一次或者多次。
// (?!\d)表示负前瞻。exp1(?!exp2)表示查找exp1,但它的后面不是exp2.

// 整个正则语句是：查找3n数字+1非数字组合前的非边界
const currency = (value, _currency = '$') => {
  const stringified = Math.abs(value).toFixed(2)

  // 获取整数部分。-3表示倒数3位的位置
  const _int = stringified.slice(0, -3)

  const _float = stringified.slice(-3)
  return [_currency, _int.replace(/\B(?=(\d{3})+(?!\d))/g, ','), _float].join('')
}

export {
  currency,
  currency2
}
