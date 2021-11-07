<template>
  <div class="setlang">
    <nuxt-link
      :class="{ selected: $i18n.locale === 'cn' }"
      :to="switchLocalePath('cn')"
      >中国語</nuxt-link
    >
    <nuxt-link
      :class="{ selected: $i18n.locale === 'en' }"
      :to="switchLocalePath('en')"
      >English</nuxt-link
    >
    <nuxt-link
      :class="{ selected: $i18n.locale === 'jp' }"
      :to="switchLocalePath('jp')"
      >日本語</nuxt-link
    >
  </div>
</template>
<style lang="scss">
.setlang {
  a {
    color: black;
    text-decoration: none;
  }
  a:hover {
    color: red;
    text-decoration: underline red 0.3em;
  }
  .selected {
    color: red;
    text-decoration: underline red 0.3em;
  }
}
</style>
