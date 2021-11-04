<template>
  <header>
    <div class="wrapper">
      <div class="site-title">
        <Link :path="'/'"
          ><div>{{ $t('SITE_TITLE') }}</div></Link
        >
      </div>
      <div class="links">
        <ul>
          <li>
            <Link :path="'/articles'">{{ $t('Articles') }}</Link>
          </li>
        </ul>
      </div>
      <SetLang />
    </div>
  </header>
</template>
<style lang="scss">
header {
  width: 100%;
  margin: 0 auto;
  height: 50px;
  padding: 10px 0;
  background-color: black;
  .wrapper {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .site-title {
      a {
        font-size: 1.8em;
        color: white;
        font-weight: 800;
        text-decoration-line: none;
      }
    }
    .links {
      ul {
        list-style: none;
        li {
          padding: 0 3px;
          display: inline-block;
          a {
            color: white;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline red 0.3em;
          }
        }
      }
    }
  }
}
</style>
