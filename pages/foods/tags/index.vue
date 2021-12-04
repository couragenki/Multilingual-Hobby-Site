<template>
  <DefaultTemplate>
    <div class="wrapper">
      <h1 class="title">
        <div>
          <span>{{ $t('FOODS') }}</span>
        </div>
      </h1>

      <h2>Tags</h2>
      <ul v-for="(item, index) in searchTags(viewArticlesData)" :key="index">
        <li>
          <Link :path="'/foods/tags/' + item">
            {{ item }}
          </Link>
        </li>
      </ul>
    </div>
  </DefaultTemplate>
</template>

<script>
import DefaultTemplate from '~/components/DefaultTemplate.vue'
export default {
  components: {
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
  methods: {
    searchTags(arr) {
      const muchArr = []
      for (let i = 0; i < arr.length; i++) {
        if (this.$i18n.locale === arr[i].language) {
          for (let ii = 0; ii < arr[i].tags.length; ii++) {
            if (!muchArr.includes(arr[i].tags[ii])) {
              muchArr.push(arr[i].tags[ii])
            }
          }
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
