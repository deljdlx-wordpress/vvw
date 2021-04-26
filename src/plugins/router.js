import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeDemo from "../views/HomeDemo";
import WordpressDemo from "../views/WordpressDemo";

Vue.use(VueRouter);

const vueRouter = new VueRouter({

  mode: 'history',
  base: '/',

  routes: [
    {
      name: 'home',
      path: '/',
      component: HomeDemo
    },
    {
      name: 'wordpress',
      path: '/wordpress',
      component: WordpressDemo
    },
  ]
});

export default vueRouter;
