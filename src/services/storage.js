export default class LocalStorageManager {
  constructor(key, isJson = false) {
    this.key = key;
    this.isJson = isJson;
  }

  set(value) {
    localStorage.setItem(this.isJson ? JSON.stringify(value) : value);
  }

  get() {
    const value = localStorage.getItem(this.key);
    return this.isJson ? JSON.parse(value) : value;
  }

  isAvailable() {
    return localStorage.has(this.key);
  }
}
