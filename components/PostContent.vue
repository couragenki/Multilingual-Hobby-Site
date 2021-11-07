<template>
  <section class="contents">
    <nuxt-content :document="postData" />
  </section>
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
.contents {
  width: 100%;
  max-width: 1200px;
  min-height: 400px;
  margin: 0 auto;
  padding-bottom: 60px;
  h2 {
    width: 100%;
    padding-bottom: 7px;
    margin-top: 60px;
    border-bottom: 6px solid #dcd7c8;
  }
  h3,
  h4 {
    width: 100%;
    padding-bottom: 7px;
    margin-top: 30px;
  }
}
</style>
