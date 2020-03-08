
const paths = require('../tools/paths')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: {
    index: paths.resolvePath('index.ts')
  },
  output: {
    path: paths.resolvePath('dist'),
    filename: '[name].bundle.js',
    /**
     * libraryTarget, 用于表示webpack打包后的文件基于何种方式发挥作用
     * libraryTarget: 'commonjs2', 入口起点的返回值将分配给 module.exports 对象,
     * 故可在使用时,使用 "模块引用" 的方式导入
     */
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            cacheDirectory: true
          }
        },
        'ts-loader'
      ],
      exclude: '/node_modules/'
    }]
  },
  resolve: {
    alias: {
      '@': paths.src
    },
    extensions: ['.ts', '.js']
  },
  plugins:[
    new CleanWebpackPlugin()
  ]
}
