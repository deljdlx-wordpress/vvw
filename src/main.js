import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

import router from "./plugins/router"
import store from "./plugins/vuex"


import wordpressApiClient from './plugins/wordpressApi';


Vue.config.productionTip = false

Vue.prototype.$wordpressApiClient = wordpressApiClient;


new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
