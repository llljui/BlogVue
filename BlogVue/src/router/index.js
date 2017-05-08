import Vue from 'vue'
import Router from 'vue-router'

import About from '@/components/About'
import Home from '@/components/Home'
import Plugs from '@/components/Plugs'
import Article from '@/components/Article'
import Read from '@/components/Read'
import Miss from '@/components/Miss'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Read',
      name: 'Read',
      component: Read
    },
    {
      path: '/Article',
      name: 'Article',
      component: Article
    },
    {
      path: '/Plugs',
      name: 'Plugs',
      component: Plugs
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Miss',
      name: 'Miss',
      component: Miss
    }
  ]
})

