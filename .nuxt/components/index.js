import { wrapFunctional } from './utils'

export { default as BlogCard } from '../../components/BlogCard.vue'
export { default as BlogCards } from '../../components/BlogCards.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as Header } from '../../components/Header.vue'
export { default as SetLang } from '../../components/SetLang.vue'

export const LazyBlogCard = import('../../components/BlogCard.vue' /* webpackChunkName: "components/blog-card" */).then(c => wrapFunctional(c.default || c))
export const LazyBlogCards = import('../../components/BlogCards.vue' /* webpackChunkName: "components/blog-cards" */).then(c => wrapFunctional(c.default || c))
export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const LazySetLang = import('../../components/SetLang.vue' /* webpackChunkName: "components/set-lang" */).then(c => wrapFunctional(c.default || c))
