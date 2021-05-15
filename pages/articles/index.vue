<template>
  <div>
    <h1 class="title">
      <div>
        <span>{{ $t('HELLO_WORLD') }}</span>
      </div>
    </h1>
    <h2>Article</h2>
    <div>{{ viewArticleData }}</div>
    <div class="links">
      <div>
        <n-link :to="localePath('/articles/1')">1へ</n-link>
      </div>
      <div>
        <n-link :to="localePath('/articles/2')">2へ</n-link>
      </div>
      <div>
        <n-link :to="localePath('/articles/3')">3へ</n-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const newsQuery = $content('news').sortBy('date', 'desc')
    const newsData = await newsQuery.fetch()
    const viewNewsData = newsData.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date)
    })

    const articleQuery = $content('articles').sortBy('date', 'desc')
    const articleData = await articleQuery.fetch()
    const viewArticleData = articleData.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date)
    })

    return { viewNewsData, viewArticleData }
  },
}
</script>
