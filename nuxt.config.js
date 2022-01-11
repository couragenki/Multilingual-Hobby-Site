import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'multilingual site demo',
    htmlAttrs: {
      lang: 'jp',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['nuxt-i18n'],

  i18n: {
    locales: [
      {
        code: 'jp',
        iso: 'jp',
        file: 'jp.json',
      },
      {
        code: 'en',
        iso: 'en',
        file: 'en.json',
      },
      {
        code: 'cn',
        iso: 'cn',
        file: 'cn.json',
      },
    ],
    langDir: 'lang/',
    fallbackLocale: ['jp'],
    defaultLocale: 'jp',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  scripts: {
    build: 'nuxi generate',
  },
})
