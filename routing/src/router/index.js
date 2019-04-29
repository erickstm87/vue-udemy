import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Greetings from '@/components/Greetings'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/greetings',
      name: 'Greetings',
      component: Greetings
    }
  ]
})
