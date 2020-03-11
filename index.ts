// require('@babel/polyfill')

// const storage = require('@/storage')

// module.exports = { 
//   storage
// }

import '@babel/polyfill'
import storage from './src/storage/storage'
import uniq from './src/uniq/uniq'

export {
  storage,
  uniq
}
