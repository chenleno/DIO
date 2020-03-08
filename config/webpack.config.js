
const paths = require('../tools/paths')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    index: paths.resolvePath('index.ts')
  },
  output: {
    path: paths.resolvePath('dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [{
      test: /\.ts$/,
      use: [
        {
          loader: 'babel-loader',
          // options: {
          //   presets: ['@babel/preset-env', { modules: false }], // modules: false  开启tree-shaking时使用
          //   cacheDirectory: true
          // }
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
