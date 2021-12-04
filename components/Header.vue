<template>
  <header>
    <div class="site-title-wrapper">
      <div class="site-title">
        <Link :path="'/'"
          ><span>{{ $t('SITE_TITLE') }}</span></Link
        >
        <div class="setlang">
          <SetLang />
        </div>
      </div>
    </div>
    <div class="links-wrapper">
      <div class="links">
        <ul>
          <li>
            <Link :path="'/foods'">
              <span>{{ $t('FOODS') }}</span>
            </Link>
          </li>
          <li>
            <Link :path="'/foods/tags'">
              <span>{{ $t('FOODS') }}タグ一覧</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
<script>
import Link from '~/components/Link.vue'
import SetLang from '~/components/SetLang.vue'
export default {
  components: {
    Link,
    SetLang,
  },
}
</script>
<style scoped lang="scss">
header {
  width: 100%;
  margin: 0 auto;
  padding: 10px 0 30px;
  .site-title-wrapper,
  .links-wrapper {
    width: 100%;
    border-bottom: 1px solid rgb(197, 197, 197);
  }
  .site-title,
  .links {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
    position: relative;
  }
  .site-title a {
    font-size: 1.8em;
    color: black;
    font-weight: 800;
    text-decoration-line: none;
  }
  .site-title .setlang {
    width: 50%;
    position: absolute;
    top: 0%;
    right: 0;
  }
  .links ul {
    list-style: none;
    li {
      padding: 0 3px;
      display: inline-block;
      a {
        font-size: 1.3em;
        color: black;
        text-decoration: none;
        font-weight: bold;
      }
      a:hover {
        text-decoration: underline red 0.3em;
      }
    }
  }
}
</style>
