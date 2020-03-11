
interface IUniq<T> {
  /**
   * @param {string | string[] | number[]} props 需要去重的字符串或数组
   */
  (props: string | T[] ): string | T[]
}

/**
 * 数组,字符串 去重方法,返回值保留原顺序
 */
let uniq: IUniq<string | number>
uniq = props => {
  if (!props) return
  const obj = {}
  const newArr = []
  const isString = typeof(props) === 'string'
  const propsValue = isString ? (<string>props).split('') : (<string[] | number[]>props)

  propsValue.forEach(i => {
    !obj[i] && (obj[i] = i)
  })
  propsValue.forEach(i => {
    !newArr.includes(obj[i]) && newArr.push(obj[i])
  })

  return isString ? newArr.join('') : newArr
}

export default uniq
