<template>
  <DefaultTemplate>
    <div class="wrapper">
      <h1 class="title">
        <span>{{ $t('FOODS') }}</span>
      </h1>
      <AllCards :all-posts="viewArticlesData" />
    </div>
  </DefaultTemplate>
</template>

<script>
import AllCards from '~/components/AllCards.vue'
export default {
  components: {
    AllCards,
  },
  async asyncData({ $content }) {
    const articlesQuery = $content('foods/articles', { deep: true }).sortBy(
      'date',
      'desc'
    )
    const articlesData = await articlesQuery.fetch()
    const viewArticlesData = articlesData.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date)
    })
    return { viewArticlesData }
  },
}
</script>
<style lang="scss">
.wrapper {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
.title {
  text-align: center;
}
</style>
