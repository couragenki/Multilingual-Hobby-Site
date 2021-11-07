<template>
  <div class="default-layout">
    <Header />
    <div class="layout-container">
      <div class="layout-main">
        <slot />
      </div>
      <SideBar />
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
    margin: 0 auto;
    display: flex;
    max-width: 1200px;
    .layout-main {
      width: 900px;
    }
  }
}
@media (max-width: 768px) {
  .default-layout {
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
}
</style>
