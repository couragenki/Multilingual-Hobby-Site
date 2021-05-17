<template>
  <footer>
    <div class="cotent">
      <div class="site-title">
        <Link :path="'/'"
          ><div>{{ $t('SITE_TITLE') }}</div></Link
        >
      </div>
      <SetLang />
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
        font-size: 1.5em;
        color: white;
        font-weight: 800;
        text-decoration-line: none;
      }
    }
  }
}
</style>
