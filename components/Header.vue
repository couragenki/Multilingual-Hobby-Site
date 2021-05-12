<template>
  <header>
    <div class="cotent">
      <div class="site-title">
        <n-link to="/"
          ><div>{{ $t('SITE_TITLE') }}</div></n-link
        >
      </div>
      <div class="setlang">
        <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
        <nuxt-link :to="switchLocalePath('jp')">日本語</nuxt-link>
      </div>
    </div>
  </header>
</template>
<style lang="scss">
header {
  width: 100%;
  margin: 0 auto;
  height: 100px;
  padding: 10px 0;
  .cotent {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .site-title {
      a {
        font-size: 1.2em;
        color: black;
        font-weight: 800;
        text-decoration-line: none;
      }
    }
    .setlang {
      a {
        color: blue;
        text-decoration-line: none;
      }
    }
  }
}
</style>
