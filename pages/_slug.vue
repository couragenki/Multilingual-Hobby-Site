<template>
  <article>
    <n-link to="/">TOPへ</n-link>
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
  async asyncData({ $content, params }) {
    const post = await $content('', params.slug || 'index').fetch()
    return { post }
  },
}
</script>
