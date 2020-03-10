interface IStorage {
  setItem(key: string, value: any): void
  getItem(key: string): any
}

const storage: IStorage = {
  setItem: (key, value) => window.localStorage.setItem(key, value.toString()),
  getItem: key => {
    const initValue = window.localStorage.getItem(key)
    
  }
}

export default storage
