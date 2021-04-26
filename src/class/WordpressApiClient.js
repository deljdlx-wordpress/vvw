console.log('%c' + 'Wordpress Api Client loaded', 'color: #0bf; font-size: 1rem; background-color:#fff');

import Client from "./Client";

export default class WordpressApiClient extends Client {

  wordpressURL;

  constructor(configuration) {
    super(configuration);
    this.wordpressURL = this.configuration.wordpressURL;
  }


  getPosts() {
    return this.get(this.wordpressURL + '/wp-json/wp/v2/posts?_embed=1').then(response => {
        return response.data;
    });
  }

  getCategories() {
    return this.get(this.wordpressURL + '/wp-json/wp/v2/categories').then(response => {
      return response.data;
   });
  }

  login(user, password) {
    return this.post(this.wordpressURL + '/wp-json/jwt-auth/v1/token', {
      'username': user,
      'password': password
    }).then(response => {
      if(!response.data.success) {
        return false;
      } else {
        return response.data.data;
      }
    });
  }


}
