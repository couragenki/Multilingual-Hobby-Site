<template>
  <div class="cards-wrapper">
    <div v-for="(item, index) in allPosts" :key="index">
      <BlogCard
        v-if="$i18n.locale === item.language"
        class="card"
        :post="item"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    allPosts: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
}
</script>
<style lang="scss">
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
@media (max-width: 1200px) {
  .wrapper {
    .cards-wrapper {
      width: 100%;
    }
  }
}
@media (max-width: 768px) {
  .wrapper {
    .cards-wrapper {
      display: block;
    }
  }
}
</style>
