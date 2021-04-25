console.log('%c' + 'User service loaded', 'color: #0bf; font-size: 1rem; background-color:#fff');

import axios from 'axios';
import Storage from 'Storage';

export default class Client
{
  configuration;
  storage;

  constructor() {
    this.configuration = configuration;
    this.storage = new Storage();
  }

  getToken() {
    const token = this.getFromStorage('jwt-token');
    if(token) {
      return token.token;
    }
    else {
      return false;
    }
  }

  store(key, value) {
    this.storage.setItem(key, value);
    return this;
  }

  getFromStorage(key) {
    let json = this.storage.getItem(key);
    let value = JSON.parse(json);
    return value;
  }

  get(url, token = null) {
    return this.query('get', url, null, token);
  }

  post(url, data = {}, token = null) {

    return this.query('post', url, data, token);
  }

  query(method, url, data = null, token = null) {
    let config = {};
    if(token) {
      config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
    }

    if(!data) {
      data = {};
    }
    return axios[method](url, data, config);
  }
}
