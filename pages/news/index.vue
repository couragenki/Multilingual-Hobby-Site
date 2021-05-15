<template>
  <div class="wrapper">
    <h1 class="title">
      <div>
        <span>{{ $t('HELLO_WORLD') }}</span>
      </div>
    </h1>
    <h2>{{ $t('Articles') }}</h2>
    <AllCards :all-posts="viewNewsData" />
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
<style lang="scss">
.wrapper {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
