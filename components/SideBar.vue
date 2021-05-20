<template>
  <div class="sidebar">
    <SetLang />
    <h4>Profile</h4>
    著者プロフィール
    <h4>人気の記事</h4>
    <p>おすすめ記事1</p>
    <p>おすすめ記事2</p>
    <p>おすすめ記事3</p>
    <p>おすすめ記事4</p>
    <p>おすすめ記事5</p>
    <h4>Links</h4>
    <ul>
      <li>
        <Link :path="'/articles'">{{ $t('Articles') }}</Link>
      </li>
      <li>
        <Link :path="'/news'">{{ $t('News') }}</Link>
      </li>
    </ul>
  </div>
</template>
<style lang="scss">
.sidebar {
  width: auto;
  min-height: 500px;
  background: gray;
  ul {
    list-style: none;
  }
}
</style>
