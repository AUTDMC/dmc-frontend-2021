import axios from 'axios';
import authService from './auth';

const AUTH_PREFIX = 'Bearer';

function insertTokenToRequest(config) {
  const {
    withToken,
    ...otherReqConfig
  } = config;

  if (!withToken) {
    return otherReqConfig;
  }

  const token = authService.getToken();
  otherReqConfig.headers.Authorization = `${AUTH_PREFIX} ${token}`;

  return otherReqConfig;
}

const requestInterceptors = [insertTokenToRequest];

class HttpService {
  constructor(instance) {
    this.instance = instance;
    HttpService.injectRequestInspectors(this.instance, requestInterceptors);
  }

  static injectRequestInspectors(instance, interceptors) {
    interceptors.forEach(instance.interceptors.request.use);
  }

  getInstance() {
    return this.instance;
  }

  get(url, config) {
    return this.instance.get(url, config);
  }

  post(url, body, config) {
    return this.instance.post(url, body, config);
  }

  put(url, body, config) {
    return this.instance.put(url, body, config);
  }

  patch(url, body, config) {
    return this.instance.patch(url, body, config);
  }

  delete(url, config) {
    return this.instance.delete(url, config);
  }
}

const httpService = new HttpService(axios.create());
Object.freeze(httpService);
Object.seal(httpService);

export default httpService;
