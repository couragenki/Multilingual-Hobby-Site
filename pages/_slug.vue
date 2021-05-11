<template>
  <article>
    <n-link to="/">TOPへ</n-link>
    {{ $i18n.locale }}{{ setLanguage }}
    <h1>{{ post.title }}</h1>
    <dl>
      <dt>date</dt>
      <dd>{{ post.date }}</dd>
    </dl>
    <div><img :src="post.image" /></div>
    <div v-for="tag in post.tags" :key="tag">{{ tag }}</div>
    <nuxt-content :document="post" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params, i18n }) {
    if (i18n.locale === 'jp') {
      const post = await $content('', params.slug || 'index').fetch()
      return { post }
    } else {
      const post = await $content('/en', params.slug || 'index').fetch()
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
