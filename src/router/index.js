import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Forside from '@/components/Forside'
import Factory from '@/components/Factory'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/forside',
      name: 'Forside',
      component: Forside
    },
    {
      path: '/factory',
      name: 'Factory',
      component: Factory
    }
  ]
})
