<template>
  <div class="sidebar">
    <SetLang />
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
