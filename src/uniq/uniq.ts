
interface IUniq<T> {
  /**
   * @param {string | string[] | number[]} props 需要去重的字符串或数组
   * @param {boolean} sortble 去重后是否需要重新排序,默认为true
   */
  (props: string | T[], sortble?: boolean ): string | T[]
}

/**
 * 数组,字符串 去重方法,返回值保留原顺序
 */
let uniq: IUniq<string | number>
uniq = (props, sortble = true) => {
  if (!props) return
  const obj = {}
  const isString = typeof(props) === 'string'
  const propsValueArr = isString ? (<string>props).split('') : (<string[] | number[]>props)

  propsValueArr.forEach(i => {
    !obj[i] && (obj[i] = i)
  })

  if (sortble) {
    const cv = Object.values(obj).sort()
    return isString ? cv.join('') : cv
  } else {
    const newArr = []
    propsValueArr.forEach(i => {
      !newArr.includes(obj[i]) && newArr.push(obj[i])
    })
    return isString ? newArr.join('') : newArr
  }
}

export default uniq
