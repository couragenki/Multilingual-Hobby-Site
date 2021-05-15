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
  padding-top: 60px;
  padding-bottom: 60px;
}
</style>
