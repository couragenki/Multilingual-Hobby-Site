import { wrapFunctional } from './utils'

export { default as Footer } from '../../components/Footer.vue'
export { default as Header } from '../../components/Header.vue'
export { default as SetLang } from '../../components/SetLang.vue'

export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const LazyHeader = import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const LazySetLang = import('../../components/SetLang.vue' /* webpackChunkName: "components/set-lang" */).then(c => wrapFunctional(c.default || c))
