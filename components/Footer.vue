<template>
  <footer>
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
  </footer>
</template>
<style lang="scss">
footer {
  width: 100%;
  margin: 0 auto;
  height: 300px;
  background: black;
  .cotent {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .site-title {
      a {
        font-size: 1.2em;
        color: white;
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
