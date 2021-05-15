<template>
  <div class="hero">
    <img :src="postData.image" />
    <section class="page-title">
      <h1>{{ postData.title }}</h1>
      <time :datetime="postData.date">{{ postData.date }}</time
      ><br /><br />
      <ul v-for="tag in postData.tags" :key="tag" class="page-tags">
        <li class="tag">{{ tag }}</li>
      </ul>
    </section>
  </div>
</template>
<script>
export default {
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
<style lang="scss">
.hero {
  width: 100%;
  height: 770px;
  background-size: cover;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    -o-object-position: center;
    object-position: center;
  }
  .page-title {
    max-width: 1200px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 60px;
    margin: auto;
    color: #fff;
    padding: 0 20px;
    z-index: 10;
    h1 {
      font-size: 2.4em;
    }
    .page-tags {
      list-style: none;
      display: inline-block;
      .tag {
        color: black;
        padding: 3px;
        background-color: lightgray;
        border-radius: 5px;
        margin-right: 5px;
      }
    }
  }
}
.hero::before {
  content: '';
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
}
</style>
