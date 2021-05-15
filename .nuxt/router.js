import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7e1f156c = () => interopDefault(import('../pages/articles/index.vue' /* webpackChunkName: "pages/articles/index" */))
const _381d9df8 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _66abd360 = () => interopDefault(import('../pages/news/index.vue' /* webpackChunkName: "pages/news/index" */))
const _818c57fc = () => interopDefault(import('../pages/articles/_slug.vue' /* webpackChunkName: "pages/articles/_slug" */))
const _64f53218 = () => interopDefault(import('../pages/news/_slug.vue' /* webpackChunkName: "pages/news/_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/articles",
    component: _7e1f156c,
    name: "articles___en"
  }, {
    path: "/jp",
    component: _381d9df8,
    name: "index___jp"
  }, {
    path: "/news",
    component: _66abd360,
    name: "news___en"
  }, {
    path: "/jp/articles",
    component: _7e1f156c,
    name: "articles___jp"
  }, {
    path: "/jp/news",
    component: _66abd360,
    name: "news___jp"
  }, {
    path: "/jp/articles/:slug",
    component: _818c57fc,
    name: "articles-slug___jp"
  }, {
    path: "/jp/news/:slug",
    component: _64f53218,
    name: "news-slug___jp"
  }, {
    path: "/articles/:slug",
    component: _818c57fc,
    name: "articles-slug___en"
  }, {
    path: "/news/:slug",
    component: _64f53218,
    name: "news-slug___en"
  }, {
    path: "/",
    component: _381d9df8,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
