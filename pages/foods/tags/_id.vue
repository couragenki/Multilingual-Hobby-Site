<template>
  <DefaultTemplate>
    <div class="wrapper">
      <h1 class="title">
        <div>
          <span>{{ $route.params.id }}</span>
        </div>
      </h1>
      <AllCards
        v-show="searchTags(viewArticlesData)"
        :all-posts="searchTags(viewArticlesData, $route.params.id)"
      />
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
  methods: {
    searchTags(arr, str) {
      const muchArr = []
      for (let i = 0; i < arr.length; i++) {
        const result = arr[i].tags.find((v) => v === str)
        if (result) {
          muchArr.push(arr[i])
        }
      }

      return muchArr
    },
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
