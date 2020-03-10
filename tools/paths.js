
const path = require('path')
const rootPath = path.resolve(__dirname, '../')

// interface IPaths {
//   resolvePath: (value: string) => string,
//   root: string,
//   src: string,
//   tools: string,
//   config: string
// }
const resolvePath = appPath => {
  return path.resolve(rootPath, appPath)
}

/**
 * @param {string} appPath 需要确认绝对路径的目录名或文件名
 * 
 * 函数返回值为当前目录相对于根目录的绝对路径
 */
module.exports = {
  resolvePath,
  root: rootPath,
  src: resolvePath('src'),
  tools: resolvePath('tools'),
  config: resolvePath('config')
}

