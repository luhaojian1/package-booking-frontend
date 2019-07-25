import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import GoodList from './views/GoodList'
import Good from './views/Good'
/* eslint-disable */

Vue.use(Router);
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      comment: Home,
    },
    {
      path: '/goodList',
      name: 'goodList',
      comment: GoodList
    },
    {
      path: '/good',
      name: 'good',
      comment: Good
    },
  ]
})
