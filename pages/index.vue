<template>
  <DefaultTemplate>
    <div class="wrapper">
      <h1 class="title">
        <div>
          <span>{{ $t('HELLO_WORLD') }}</span>
        </div>
      </h1>
      <h2>{{ $t('Articles') }}</h2>
      <AllCards :all-posts="viewArticlesData" />
    </div>
  </DefaultTemplate>
</template>

<script>
import AllCards from '~/components/AllCards.vue'
export default {
  components: { AllCards },
  async asyncData({ $content }) {
    const articleQuery = $content('articles', { deep: true }).sortBy(
      'date',
      'desc'
    )
    const viewArticlesData = await articleQuery.fetch()

    return {
      viewArticlesData,
    }
  },
}
</script>
