import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('../view/common/Login.vue')), 'login')
const home = r => require.ensure([], () => r(require('../view/common/Home.vue')), 'home')
const markdown = r => require.ensure([], () => r(require('../view/editor/MarkdownEditor.vue')), 'markdown')
const quill = r => require.ensure([], () => r(require('../view/editor/QuillEditor.vue')), 'quill')
const chart = r => require.ensure([], () => r(require('../view/charts/Chart.vue')), 'chart')

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
      component: home,
      children: [
        {
          path: '/MarkdownEditor',
          component: markdown
        },
        {
          path: '/QuillEditor',
          component: quill
        },
        {
          path: '/Charts',
          component: chart
        }
      ]
    }
  ]
})
