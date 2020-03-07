
module.exports = {
  setItem: (key: string, value: any): void => localStorage.setItem(key, value.toString()),
  getItem: (key: string): any => JSON.parse(localStorage.getItem(key)) || ''
}
