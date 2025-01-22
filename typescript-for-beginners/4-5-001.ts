interface SStorage<T> {
    [key:string]: T;
}

class LocalStorage<T> {
    private storage: SStorage<T>;

    constructor() {
        this.storage = {};
    }

    setItem(key: string, value: T) {
        this.storage[key] = value;
    }

    getItem(key: string): T {
        return this.storage[key];
    }
}

