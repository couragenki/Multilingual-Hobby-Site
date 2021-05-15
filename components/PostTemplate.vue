<template>
  <article class="postspage">
    <Hero :post-data="postData" />
    <PostContent :post-data="postData" />
  </article>
</template>

<script>
import Hero from '~/components/Hero.vue'
import PostContent from '~/components/PostContent.vue'
export default {
  components: { Hero, PostContent },
  props: {
    postData: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },
}
</script>
