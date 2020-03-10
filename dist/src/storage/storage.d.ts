interface IStorage {
    setItem(key: string, value: any): void;
    getItem(key: string): any;
}
declare const storage: IStorage;
export default storage;
