<template>
  <n-link :to="localePath(setPath)">
    <slot />
  </n-link>
</template>
<script>
export default {
  props: {
    path: {
      type: String,
      default: () => {
        return ''
      },
    },
  },
  computed: {
    setPath() {
      return this.path.replace('/jp', '')
    },
  },
}
</script>
<style scoped lang="scss">
a:hover {
  cursor: pointer;
}
</style>
