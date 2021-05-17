import { wrapFunctional } from './utils'

export { default as AllCards } from '../../components/AllCards.vue'
export { default as BlogCard } from '../../components/BlogCard.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as Header } from '../../components/Header.vue'
export { default as Hero } from '../../components/Hero.vue'
export { default as Link } from '../../components/Link.vue'
export { default as PostContent } from '../../components/PostContent.vue'
export { default as PostTemplate } from '../../components/PostTemplate.vue'
export { default as SetLang } from '../../components/SetLang.vue'

export const LazyAllCards = import('../../components/AllCards.vue' /* webpackChunkName: "components/all-cards" */).then(c => wrapFunctional(c.default || c))
export const LazyBlogCard = import('../../components/BlogCard.vue' /* webpackChunkName: "components/blog-card" */).then(c => wrapFunctional(c.default || c))
export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const LazyHero = import('../../components/Hero.vue' /* webpackChunkName: "components/hero" */).then(c => wrapFunctional(c.default || c))
export const LazyLink = import('../../components/Link.vue' /* webpackChunkName: "components/link" */).then(c => wrapFunctional(c.default || c))
export const LazyPostContent = import('../../components/PostContent.vue' /* webpackChunkName: "components/post-content" */).then(c => wrapFunctional(c.default || c))
export const LazyPostTemplate = import('../../components/PostTemplate.vue' /* webpackChunkName: "components/post-template" */).then(c => wrapFunctional(c.default || c))
export const LazySetLang = import('../../components/SetLang.vue' /* webpackChunkName: "components/set-lang" */).then(c => wrapFunctional(c.default || c))
