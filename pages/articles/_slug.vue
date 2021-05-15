<template>
  <article>
    <h1>{{ post.title }}</h1>
    <dl>
      <dt>date</dt>
      <dd>{{ post.date }}</dd>
    </dl>
    <div><img :src="post.image" /></div>
    <div v-for="tag in post.tags" :key="tag">{{ tag }}</div>
    <nuxt-content :document="post" />
    <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
    <nuxt-link :to="switchLocalePath('jp')">日本語</nuxt-link>
  </article>
</template>

<script>
export default {
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
