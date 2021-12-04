<template>
  <DefaultTemplate>
    <div class="wrapper">
      <h1 class="title">
        <div>
          <span>{{ $t('HELLO_WORLD') }}</span>
        </div>
      </h1>
      <p class="intoro">{{ $t('INTORO') }}</p>

      <h2 class="title">
        <span>{{ $t('FOODS') }}</span>
      </h2>
      <AllCards :all-posts="viewArticlesData" />
    </div>
  </DefaultTemplate>
</template>
<script>
import DefaultTemplate from '~/components/DefaultTemplate.vue'
import AllCards from '~/components/AllCards.vue'
export default {
  components: {
    AllCards,
    DefaultTemplate,
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
<style scoped>
.title {
  text-align: left;
}
.intoro {
  padding: 30px 0 50px;
  text-align: left;
}
</style>
