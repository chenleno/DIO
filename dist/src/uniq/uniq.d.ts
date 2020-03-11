interface IUniq<T> {
    /**
     * @param {string | string[] | number[]} props 需要去重的字符串或数组
     */
    (props: string | T[]): string | T[];
}
/**
 * 数组,字符串 去重方法,返回值保留原顺序
 */
declare let uniq: IUniq<string | number>;
export default uniq;
