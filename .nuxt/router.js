import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3dcad8be = () => interopDefault(import('..\\pages\\articles.vue' /* webpackChunkName: "pages_articles" */))
const _708d4394 = () => interopDefault(import('..\\pages\\articles\\_tab.vue' /* webpackChunkName: "pages_articles__tab" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/articles",
    component: _3dcad8be,
    name: "articles",
    children: [{
      path: ":tab?",
      component: _708d4394,
      name: "articles-tab"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
