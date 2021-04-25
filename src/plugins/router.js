import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeDemo from "../views/HomeDemo";

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
  ]
});

export default vueRouter;
