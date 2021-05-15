<template>
  <PostTemplate :post-data="post" />
</template>

<script>
import PostTemplate from '~/components/PostTemplate.vue'
export default {
  components: { PostTemplate },
  async asyncData({ $content, params, i18n }) {
    if (i18n.locale === 'en') {
      const post = await $content('/articles', params.slug || 'index').fetch()
      return { post }
    } else {
      const post = await $content(
        '/articles/jp',
        params.slug || 'index'
      ).fetch()

      return { post }
    }
  },
  computed: {
    setLanguage() {
      if (this.$i18n.locale === 'jp') {
        return '日本語'
      } else {
        return 'English'
      }
    },
  },
}
</script>
