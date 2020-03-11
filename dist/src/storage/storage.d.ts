interface IStorage {
    /**
     * @param {string} key localStorage 存储的键名
     * @param {any} value localStorage 存储的内容
     */
    setItem(key: string, value: any): void;
    /**
     * @param {string} key localStorage 取值键
     */
    getItem(key: string): any;
}
declare const storage: IStorage;
export default storage;
