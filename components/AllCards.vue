<template>
  <div class="cards-wrapper">
    <div class="cards">
      <BlogCard v-for="(item, index) in allPosts" :key="index" :post="item" />
    </div>
  </div>
</template>
<script>
import BlogCard from '~/components/BlogCard.vue'
export default {
  components: { BlogCard },
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
    .cards {
      .blog-crad {
        width: 48%;
        margin: 0 1% 2rem 1%;
      }
    }
  }
}
@media (max-width: 768px) {
  .cards-wrapper {
    .cards {
      .blog-crad {
        width: 46%;
        margin: 40px 2%;
      }
    }
  }
}
</style>
