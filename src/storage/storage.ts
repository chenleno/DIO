interface IStorage {
  setItem(key: string, value: any): void
  getItem(key: string): any
}

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
