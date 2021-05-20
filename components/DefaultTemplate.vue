<template>
  <div class="default-layout">
    <Header />
    <div class="layout-container">
      <div class="layout-main">
        <slot />
      </div>
      <SideBar class="sidebar" />
    </div>
    <Footer />
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
<style lang="scss" scoped>
.default-layout {
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
}
</style>
