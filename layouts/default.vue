<template>
  <div>
    <Header />
    <div class="layout-container">
      <Nuxt class="layout-main" />
    </div>
    <Footer />
  </div>
</template>

<style lang="scss">
.layout-container {
  width: 100%;
  .layout-main {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
}
* {
  margin: 0;
  padding: 0;
}
</style>
