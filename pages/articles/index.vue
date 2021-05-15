<template>
  <div>
    <h1 class="title">
      <div>
        <span>{{ $t('HELLO_WORLD') }}</span>
      </div>
    </h1>
    <h2>{{ $t('Articles') }}</h2>
    <ul v-for="(item, index) in viewArticlesData" :key="index">
      <n-link :to="localePath(item.path)">
        <li>{{ item.title }}</li>
      </n-link>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articlesQuery = $content('articles').sortBy('date', 'desc')
    const articlesData = await articlesQuery.fetch()
    const viewArticlesData = articlesData.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date)
    })
    return { viewArticlesData }
  },
}
</script>
