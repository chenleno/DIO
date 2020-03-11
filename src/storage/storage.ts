
interface IStorage {
  /**
   * @param {string} key localStorage 存储的键名
   * @param {any} value localStorage 存储的内容
   */
  setItem(key: string, value: any): void
  /**
   * @param {string} key localStorage 取值键
   */
  getItem(key: string): any
}

/**
 * 简化localStorage 存取方法
 */
const storage: IStorage = {
  setItem: (key, value) => {
    if (typeof(value) === 'string') {
      localStorage.setItem(key, value)
    }
    localStorage.setItem(key, JSON.stringify(value))
  },
  getItem: key => {
    const r = localStorage.getItem(key)
    if (r) {
      try {
        return JSON.parse(r)
      } catch(err) {
        return r
      }
    }
  }
}

export default storage
