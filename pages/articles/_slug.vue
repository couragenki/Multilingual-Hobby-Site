<template>
  <PostTemplate :post-data="post" />
</template>

<script>
import PostTemplate from '~/components/PostTemplate.vue'
export default {
  components: { PostTemplate },
  async asyncData({ $content, params, i18n }) {
    if (i18n.locale === 'cn') {
      const post = await $content(
        '/articles/cn',
        params.slug || 'index'
      ).fetch()

      return { post }
    } else if (i18n.locale === 'en') {
      const post = await $content(
        '/articles/en',
        params.slug || 'index'
      ).fetch()

      return { post }
    } else if (i18n.locale === 'ko') {
      const post = await $content(
        '/articles/ko',
        params.slug || 'index'
      ).fetch()

      return { post }
    } else if (i18n.locale === 'th') {
      const post = await $content(
        '/articles/th',
        params.slug || 'index'
      ).fetch()

      return { post }
    } else if (i18n.locale === 'tw') {
      const post = await $content(
        '/articles/tw',
        params.slug || 'index'
      ).fetch()

      return { post }
    } else {
      const post = await $content('/articles', params.slug || 'index').fetch()
      return { post }
    }
  },
  // computed: {
  //   setLanguage() {
  //     if (this.$i18n.locale === 'en') {
  //       return 'English'
  //     } else {
  //       return '日本語'
  //     }
  //   },
  // },
}
</script>
