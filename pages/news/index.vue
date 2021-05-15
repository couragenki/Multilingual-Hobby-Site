<template>
  <div>
    <h1 class="title">
      <div>
        <span>{{ $t('HELLO_WORLD') }}</span>
      </div>
    </h1>
    <h2>News</h2>
    <ul v-for="(item, index) in viewNewsData" :key="index">
      <n-link :to="localePath(item.path)">
        <li>{{ item.title }}</li>
      </n-link>
    </ul>
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
    return { viewNewsData }
  },
}
</script>
