<template>
  <DefaultTemplate>
    <div class="wrapper">
      <h1 class="title">
        <div>
          <span>{{ $t('FOODS') }}</span>
        </div>
      </h1>
      <h2>{{ $t('Articles') }}</h2>
      <AllCards :all-posts="viewArticlesData" />
    </div>
  </DefaultTemplate>
</template>

<script>
import DefaultTemplate from '~/components/DefaultTemplate.vue'
import AllCards from '~/components/AllCards.vue'
export default {
  components: {
    DefaultTemplate,
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
</style>
