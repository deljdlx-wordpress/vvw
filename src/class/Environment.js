export default class Environment
{
  host;

  constructor() {
    console.log(document.location)
    this.host = document.location.host;
  }

}
