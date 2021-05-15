<template>
  <div class="wrapper">
    <h1 class="title">
      <div>
        <span>{{ $t('HELLO_WORLD') }}</span>
      </div>
    </h1>
    <h2>{{ $t('Articles') }}</h2>
    <div class="cards-wrapper">
      <div v-for="(item, index) in viewArticlesData" :key="index">
        <BlogCard
          v-if="$i18n.locale === item.language"
          class="card"
          :post="item"
        />
      </div>
    </div>
    <h2>{{ $t('News') }}</h2>
    <div>
      <ul v-for="(item, index) in viewNewsData" :key="index">
        <div v-if="$i18n.locale === item.language">
          <li>
            <n-link :to="localePath(item.path)">{{ item.title }}</n-link>
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import BlogCard from '~/components/BlogCard.vue'
export default {
  components: { BlogCard },
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
  .cards-wrapper {
    width: 100%;
    min-height: 400px;
    background: brown;
    padding: 0;
    list-style: none;
    display: inline-flex;
    justify-content: normal;
    flex-wrap: wrap;
  }
}
@media (max-width: 1200px) {
  .wrapper {
    .cards-wrapper {
      .article {
        width: 300px;
        margin: 0 1% 2rem;
      }
    }
  }
}
</style>
