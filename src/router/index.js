import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('../view/common/Login.vue')), 'login')
const home = r => require.ensure([], () => r(require('../view/common/Home.vue')), 'home')

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/home',
      name: 'Hello',
      component: home
    }
  ]
})
