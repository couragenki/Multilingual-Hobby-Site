<template>
  <article>
    <div class="hero">
      <img :src="post.image" />
      <section class="page-title">
        <time :datetime="post.date">{{ post.date }}</time>
        <h1>{{ post.title }}</h1>
        <div v-for="tag in post.tags" :key="tag">{{ tag }}</div>
      </section>
    </div>
    <section class="contents">
      <nuxt-content :document="post" />
    </section>
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params, i18n }) {
    if (i18n.locale === 'en') {
      const post = await $content('/articles', params.slug || 'index').fetch()
      return { post }
    } else {
      const post = await $content(
        '/articles/jp',
        params.slug || 'index'
      ).fetch()

      return { post }
    }
  },
  computed: {
    setLanguage() {
      if (this.$i18n.locale === 'jp') {
        return '日本語'
      } else {
        return 'English'
      }
    },
  },
}
</script>
<style lang="scss">
article {
  img {
    width: 100%;
  }
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
  .contents {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
}
</style>
