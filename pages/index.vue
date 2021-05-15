<template>
  <div>
    <h1 class="title">
      <div>
        <span>{{ $t('HELLO_WORLD') }}</span>
      </div>
    </h1>
    <h2>{{ $t('Articles') }}</h2>
    <div>
      <ul v-for="(item, index) in viewArticlesData" :key="index">
        <div v-if="$i18n.locale === item.language">
          <li>
            <n-link :to="localePath(item.path)">{{ item.title }}</n-link>
          </li>
        </div>
      </ul>
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
export default {
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
