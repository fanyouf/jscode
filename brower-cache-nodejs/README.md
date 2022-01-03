# nodejs设置缓存demo

## 开始
```
npm install
npm start
```
## 目录结构
```js
react-app
├── config
│   └── webpack.config.js
├── static
│   ├── index.html   # 不做缓存处理
│   ├── index.js     # 对它使用协商缓存
│   ├── style5.css   # 强缓存，5秒到期
│   └── style10.css  # 强缓存，10秒到期
├── pages
│   ├── home
│   ├── app
│   └── help
├── server.js  # nodejs写的简易http服务器
├── package.json
└── package-lock.json
```
## 使用
项目启动之后，在`http://localhost8080/index.html`查看效果

- 首次启动时(记此时是0秒)：index.html,index.js,style5.css,style10.css全部是200。。
- 3秒时刷新：index.html 200; index.js 403;  style5.css 本地缓存; style10.css 本地缓存
- 6秒时刷新：index.html 200; index.js 403;  style5.css 强缓存过期，重发请求,200,再次计时，5秒后过期; style10.css 强缓存有效，继续使用本地缓存

## 核心代码
[代码](./server.js)

## 博客地址
