import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/index'
import Login from '@/components/login'
import Home from '@/components/home'

Vue.use(Router)
/**
 * index为父路由
 */
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children: [
        {
          path: '/',
          name: 'home',
          component: Home
        },
        {
          path: '/home/:id',
          name: 'login',
          component: Login
        }
      ]
    }
  ]
})
