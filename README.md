# DIO
基于ts编写的工具库，同步至npm

![我是DIO哒](https://i0.wp.com/i0.hdslb.com/bfs/archive/badc22dc8e557cb0386a0a5a2affbd1549c29242.jpg?fit=320,200)

## Usage
> storage

storage 简化了 localStorage 的 getItem 和 setItem 方法, 自动转化存取格式
```javascript
import { storage } from '@lenochen/dio'
const boo = { a: 1, b: 2}
storage.setItem('bar', boo)
storage.getItem('bar') // { a: 1, b: 2 } 
```

## 踩坑
### output.libraryTarget
此坑在编写工具库项目DIO时遇到，该项目基于webpack打包。但是在使用模块方式引入包文件时却无法获取到打包的内容。
```javascript
// @lenochen/dio
// index.js 工具库项目DIO打包入口
const a = require('./a.js')
module.exports = { a }

// Usage 使用DIO的另一个项目
// npm i @lenochen/dio
import { a } from '@lenochen/dio'
console.log(a) // undefined
```
经调查发现问题出在DIO项目webpack配置的output的参数上
```javascript
// @lenochen/dio
// webpack.config.js
{
  ...,
  output: {
    filename: 'index.bundle.js',
    path: 'dist',
    // ++++
    libraryTarget: 'commonjs2' // 增加此参数后，打包文件便可以使用模块化方式引入
    // ++++
  },
  ...
}
```
详细libraryTarget配置解析见
[output.libraryTarget](https://webpack.docschina.org/configuration/output/#output-librarytarget)
