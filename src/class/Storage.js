console.log('%c' + 'Sorage class loaded', 'color: #0bf; font-size: 1rem; background-color:#fff');

export default class Storage
{

  driver;
  constructor() {
    this.driver = window.localStorage;
  }

  set(key, value) {
    let json = JSON.stringify(value);
    this.driver.setItem(key, json);
    return this;
  }

  get(key) {
    let json = this.driver.getItem(key);
    let value = JSON.parse(json);
    return value;
  }

}
