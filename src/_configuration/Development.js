import Environment from '../class/Environment';

export default class Development extends Environment
{
  wordpressURL;

  constructor() {
    super();
    this.wordpressURL = 'http://localhost/deploy-wordpress-sample/public';
  }
}
