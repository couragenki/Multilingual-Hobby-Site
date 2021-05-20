<template>
  <div class="cards-wrapper">
    <div class="cards">
      <BlogCard v-for="(item, index) in allPosts" :key="index" :post="item" />
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
  .cards {
    width: 100%;
    max-width: 1200px;
    min-height: 400px;
    padding: 0;
    margin: 0 auto;
    list-style: none;
    display: inline-flex;
    justify-content: normal;
    flex-wrap: wrap;
    .blog-crad {
      width: 48%;
      margin: 0 2% 2rem 0;
    }
  }
}
@media (max-width: 1200px) {
  .cards-wrapper {
    width: 100%;
    .cards {
      .blog-crad {
        width: 31%;
        margin: 0 8px 2rem;
      }
    }
  }
}
@media (max-width: 768px) {
  .cards-wrapper {
    display: block;
    .cards {
      .blog-crad {
        width: 100%;
        margin: 1rem 8px;
      }
    }
  }
}
</style>
