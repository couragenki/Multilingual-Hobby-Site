<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        <div>
          <span>{{ $t('HELLO_WORLD') }}</span>
        </div>
      </h1>
      <div class="links">
        <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
        <nuxt-link :to="switchLocalePath('jp')">日本語</nuxt-link>
        <div>
          <n-link :to="localePath('/1')">1へ</n-link>
        </div>
        <div>
          <n-link to="/2">2へ</n-link>
        </div>
        <div>
          <n-link to="/3">3へ</n-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
