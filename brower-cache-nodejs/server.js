const http = require('http')
const fs = require('fs')
const url = require('url')
const path = require('path')
// etag 根据文件内容，生成标签
const etag = require('etag')
const fresh = require('fresh')

const server = http.createServer(function (req, res) {
  let isFresh
  // eslint-disable-next-line node/no-deprecated-api
  const pathname = url.parse(req.url, true).pathname
  const filePath = path.join(__dirname, 'static', pathname)
  console.log('filePath', pathname)
  // 读取文件描述信息，用于计算etag及设置Last-Modified
  fs.stat(filePath, function (err, stat) {
    if (err) {
      res.writeHead(404, 'not found')
      res.end('<h1>404 Not Found</h1>')
      return
    }
    // index.js 使用协商缓存
    if (pathname === '/index.js') {
      const lastModified = stat.mtime.toUTCString()
      const fileEtag = etag(stat)
      // 设置响应头
      // 1. 让强缓存无效
      res.setHeader('Cache-Control', 'no-cache')
      // 2. 设置响应Last-Modified
      res.setHeader('Last-Modified', lastModified)
      res.setHeader('ETag', fileEtag)

      // 根据请求头判断缓存是否是最新的
      isFresh = fresh(req.headers, {
        etag: fileEtag,
        'last-modified': lastModified
      })
    } else if (pathname === '/style5.css') {
      // 其他静态资源使用强缓存
      // index.css 过期时间5秒
      res.setHeader('Cache-Control', 'public, max-age=5')
    } else if (pathname === '/style10.css') {
      // style.css 过期时间10秒
      const expires = new Date()
      expires.setTime(expires.getTime() + 10 * 1000)
      res.setHeader('Expires', expires.toUTCString())
    }

    fs.readFile(filePath, 'utf-8', function (err, fileContent) {
      if (err) {
        res.writeHead(404, 'not found')
        res.end('<h1>404 Not Found</h1>')
        return
      }
      // 处理协商缓存
      // 最新的,返回304状态码
      if (pathname === '/index.js' && isFresh) {
        res.writeHead(304, 'Not Modified')
      } else {
        res.write(fileContent, 'utf-8')
      }
      res.end()
    })
  })
})
server.listen(8080)
console.log('server is running on http://localhost:8080/index.html')
