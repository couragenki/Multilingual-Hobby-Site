<template>
  <div class="sidebar">
    <h4>Profile</h4>
    著者プロフィール
    <h4>人気の記事</h4>
    <p>text1</p>
    <p>text2</p>
    <p>text3</p>
    <p>text4</p>
    <p>text5</p>
    <h4>Links</h4>
    <ul>
      <li>
        <Link :path="'/articles'">{{ $t('Articles') }}</Link>
      </li>
    </ul>
  </div>
</template>
<style lang="scss">
.sidebar {
  width: auto;
  min-height: 500px;
  ul {
    list-style: none;
  }
}
</style>
