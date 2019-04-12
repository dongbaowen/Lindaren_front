import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Login from '@/components/login/Login'
import HomePage from '@/components/homePage/homePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/homePage',
      name: 'homePage',
      component: HomePage
    }
  ]
})
