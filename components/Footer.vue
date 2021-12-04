<template>
  <footer>
    <div class="wrapper">
      <div class="site-title">
        <Link :path="'/'"
          ><div>{{ $t('SITE_TITLE') }}</div></Link
        >
        <div class="lang">
          <SetLang />
        </div>
      </div>
      <nav class="footer-links">
        <section class="category-links">
          <h3 class="category">Category</h3>
          <ul class="links">
            <li class="link">Link</li>
            <li class="link">Link</li>
            <li class="link">Link</li>
            <li class="link">Link</li>
            <li class="link">Link</li>
            <li class="link">Link</li>
          </ul>
        </section>
        <section class="category-links">
          <h3 class="category">Category</h3>
          <ul class="links">
            <li class="link">Link</li>
            <li class="link">Link</li>
            <li class="link">Link</li>
            <li class="link">Link</li>
            <li class="link">Link</li>
            <li class="link">Link</li>
          </ul>
        </section>
        <section class="category-links">
          <h3 class="category">Category</h3>
          <ul class="links">
            <li class="link">Link</li>
            <li class="link">Link</li>
            <li class="link">Link</li>
            <li class="link">Link</li>
            <li class="link">Link</li>
            <li class="link">Link</li>
          </ul>
        </section>
        <section class="category-links">
          <h3 class="category">Category</h3>
          <ul class="links">
            <li class="link">Link</li>
            <li class="link">Link</li>
            <li class="link">Link</li>
            <li class="link">Link</li>
            <li class="link">Link</li>
            <li class="link">Link</li>
          </ul>
        </section>
      </nav>
      <p class="copywrite">＠コピーライト</p>
    </div>
  </footer>
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
footer {
  width: 100%;
  margin: 0 auto;
  background: white;
  border-top: 2px solid gray;
  .wrapper {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }
  .site-title {
    width: 100%;
    position: relative;
    padding: 40px 0;
    a {
      font-size: 1.5em;
      color: black;
      font-weight: 800;
      text-decoration-line: none;
    }
    .lang {
      position: absolute;
      top: 40px;
      right: 0;
    }
  }
  .footer-links {
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 30px;
    margin-bottom: 30px;
    padding: 0 5%;
    .category-links {
      width: auto;
      ul {
        li {
          list-style: none;
        }
      }
    }
  }
  .copywrite {
    padding-top: 30px;
    padding-bottom: 30px;
    border-top: 1px solid gray;
    text-align: center;
    color: black;
  }
}
@media (max-width: 768px) {
  footer {
    .site-title {
      width: 90%;
      margin: 0 5%;
      .lang {
        position: absolute;
        right: 5%;
      }
    }
  }
}
</style>
