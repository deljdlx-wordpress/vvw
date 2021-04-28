// Environment configuration sample file

import Environment from '../src/class/Environment';

export default class Development extends Environment
{
  wordpressURL;

  constructor() {
    super();
    this.wordpressURL = 'http://localhost/deploy-wordpress-sample/public';
  }
}
