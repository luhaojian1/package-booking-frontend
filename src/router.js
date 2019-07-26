import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import GoodList from './views/GoodList'
import CustomerView from "./views/CustomerView";
/* eslint-disable */
console.log(process.env.BASE_URL)

Vue.use(Router);
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/goodList',
      name: 'goodList',
      component: GoodList
    },
    {
      path: '/goodreservation',
      name: 'goodReservation',
      component: CustomerView
    },
  ]
})
