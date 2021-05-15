<template>
  <div class="wrapper">
    <h1 class="title">
      <div>
        <span>{{ $t('HELLO_WORLD') }}</span>
      </div>
    </h1>
    <h2>{{ $t('Articles') }}</h2>
    <BlogCards :all-posts="viewArticlesData" />
    <h2>{{ $t('News') }}</h2>
    <BlogCards :all-posts="viewNewsData" />
  </div>
</template>

<script>
import BlogCards from '~/components/BlogCards.vue'
export default {
  components: { BlogCards },
  async asyncData({ $content }) {
    const newsQuery = $content('news', { deep: true }).sortBy('date', 'desc')
    const viewNewsData = await newsQuery.fetch()

    const articleQuery = $content('articles', { deep: true }).sortBy(
      'date',
      'desc'
    )
    const viewArticlesData = await articleQuery.fetch()

    return {
      viewNewsData,
      viewArticlesData,
    }
  },
}
</script>
<style lang="scss">
.wrapper {
  width: 100%;
  max-width: 1200px;
}
</style>
