<template>
  <article class="postspage">
    <Header />
    <div class="layout-container">
      <div class="layout-main">
        <img class="thumbnail" :src="postData.image" />
        <h1 class="post-title">{{ postData.title }}</h1>
        <ul v-for="tag in postData.tags" :key="tag" class="post-tags">
          <li class="tag">{{ tag }}</li>
        </ul>
        <br />
        <time :datetime="postData.date">{{ postData.date }}</time>
        <PostContent :post-data="postData" />
      </div>
      <SideBar />
    </div>
    <Footer />
  </article>
</template>

<script>
import PostContent from '~/components/PostContent.vue'
export default {
  components: { PostContent },
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
    .thumbnail {
      width: 100%;
    }
  }
}
.post-title {
  font-size: 2em;
}
.post-tags {
  display: inline-block;
  margin-top: 10px;
  margin-bottom: 10px;
  .tag {
    font-size: 0.8em;
    margin-right: 1em;
    list-style: none;
    background-color: #dcd7c8;
    padding: 5px;
    border-radius: 10px;
  }
}
@media (max-width: 768px) {
  .layout-container {
    display: block;
    .layout-main {
      width: 100%;
    }
  }
  .sidebar {
    width: 100%;
  }
}
</style>
