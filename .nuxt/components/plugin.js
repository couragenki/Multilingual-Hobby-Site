import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  AllCards: () => import('../../components/AllCards.vue' /* webpackChunkName: "components/all-cards" */).then(c => wrapFunctional(c.default || c)),
  BlogCard: () => import('../../components/BlogCard.vue' /* webpackChunkName: "components/blog-card" */).then(c => wrapFunctional(c.default || c)),
  Footer: () => import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  Header: () => import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c)),
  Hero: () => import('../../components/Hero.vue' /* webpackChunkName: "components/hero" */).then(c => wrapFunctional(c.default || c)),
  Link: () => import('../../components/Link.vue' /* webpackChunkName: "components/link" */).then(c => wrapFunctional(c.default || c)),
  PostContent: () => import('../../components/PostContent.vue' /* webpackChunkName: "components/post-content" */).then(c => wrapFunctional(c.default || c)),
  PostTemplate: () => import('../../components/PostTemplate.vue' /* webpackChunkName: "components/post-template" */).then(c => wrapFunctional(c.default || c)),
  SetLang: () => import('../../components/SetLang.vue' /* webpackChunkName: "components/set-lang" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
