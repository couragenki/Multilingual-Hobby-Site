<template>
  <article class="postspage">
    <Header />
    <Hero :post-data="postData" />
    <div class="layout-container">
      <div class="layout-main">
        <PostContent :post-data="postData" />
      </div>
      <SideBar class="sidebar" />
    </div>
    <Footer />
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
<style lang="scss" scoped>
.layout-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  .layout-main {
    width: 900px;
  }
}
.sidebar {
  width: 300px;
}
</style>
