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
import Header from '~/components/Header.vue'
import SideBar from '~/components/SideBar.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: {
    Header,
    SideBar,
    Footer,
  },
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
