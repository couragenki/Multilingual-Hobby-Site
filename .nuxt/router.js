import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7e1f156c = () => interopDefault(import('../pages/articles/index.vue' /* webpackChunkName: "pages/articles/index" */))
const _381d9df8 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _66abd360 = () => interopDefault(import('../pages/news/index.vue' /* webpackChunkName: "pages/news/index" */))
const _2896945c = () => interopDefault(import('../pages/articles/en/_slug.vue' /* webpackChunkName: "pages/articles/en/_slug" */))
const _e07f12f4 = () => interopDefault(import('../pages/news/en/_slug.vue' /* webpackChunkName: "pages/news/en/_slug" */))
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
    name: "articles___jp"
  }, {
    path: "/en",
    component: _381d9df8,
    name: "index___en"
  }, {
    path: "/news",
    component: _66abd360,
    name: "news___jp"
  }, {
    path: "/en/articles",
    component: _7e1f156c,
    name: "articles___en"
  }, {
    path: "/en/news",
    component: _66abd360,
    name: "news___en"
  }, {
    path: "/en/articles/en/:slug?",
    component: _2896945c,
    name: "articles-en-slug___en"
  }, {
    path: "/en/news/en/:slug?",
    component: _e07f12f4,
    name: "news-en-slug___en"
  }, {
    path: "/articles/en/:slug?",
    component: _2896945c,
    name: "articles-en-slug___jp"
  }, {
    path: "/en/articles/:slug",
    component: _818c57fc,
    name: "articles-slug___en"
  }, {
    path: "/en/news/:slug",
    component: _64f53218,
    name: "news-slug___en"
  }, {
    path: "/news/en/:slug?",
    component: _e07f12f4,
    name: "news-en-slug___jp"
  }, {
    path: "/articles/:slug",
    component: _818c57fc,
    name: "articles-slug___jp"
  }, {
    path: "/news/:slug",
    component: _64f53218,
    name: "news-slug___jp"
  }, {
    path: "/",
    component: _381d9df8,
    name: "index___jp"
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
