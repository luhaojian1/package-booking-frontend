import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import GoodList from './views/GoodList'
import Main from './views/Main'
import Good from './views/Good'
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/home',
      name: 'Home',
      comment: Home,
      redirect: 'goodList',
      children:[
        {
          path: 'goodList',
          name: 'goodList',
          comment: GoodList,
        },
        {
          path: 'good',
          name: 'good',
          comment: Good,
        }
      ]
    },
  ]
})
