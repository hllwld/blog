import Vue from 'vue'
import Router from 'vue-router'

import login from '@/view/login/login'
import index from '@/view/index/index'
import listxx from '@/view/listxx/listxx'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   name:'login',
    //   path: '',
    //   redirect: '/index/login'
    // },
    {
      name: 'index',
      path: '',
      redirect: '/index/index'
    },
    {
      path: '/index/login',
      name: 'login',
      component: login
    },
    {
      path: '/index/index',
      name: 'index',
      component: index
    },
    {
      path: '/index/listxx',
      name: 'listxx',
      component: listxx
    }
  ]
})