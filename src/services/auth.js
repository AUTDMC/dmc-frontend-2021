import LocalStorageManager from './storage';

class AuthManager {
  constructor() {
    this.tokenKey = 'token';
    this.storage = new LocalStorageManager(this.tokenKey);
  }

  getToken() {
    return this.storage.get();
  }

  setToken(token) {
    this.storage.set(token);
  }

  isLoggedIn() {
    return this.storage.isAvailable();
  }

  // eslint-disable-next-line class-methods-use-this
  getData() {
    // return decrypted token data
    return {};
  }
}

const authService = new AuthManager();

Object.freeze(authService);
Object.seal(authService);

export default authService;
