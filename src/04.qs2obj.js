/**
 *
 * @param {*} url http://localhost/training/test_javascript.html?name=xiaoli&sex=man
 * @returns
 */
function qs2obj (url) {
  // 获取URL中?之后的字符

  const obj = {}
  const [, qs] = url.split('?')
  if (!qs) {
    return obj
  }
  qs.split('&').forEach(element => {
    const [key, value = ''] = element.split('=')
    obj[decodeURIComponent(key)] = decodeURIComponent(value)
  })
  return obj
}

export {
  qs2obj
}
