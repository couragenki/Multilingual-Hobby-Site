<template>
  <div class="sidebar">
    <h4>Links</h4>
    <ul>
      <li>
        <Link :path="'/foods'">
          <span>{{ $t('FOODS') }}</span>
        </Link>
      </li>
      <li>
        <Link :path="'/foods/tags'">
          <span>Tags</span>
        </Link>
      </li>
    </ul>
  </div>
</template>

<script>
import Link from '~/components/Link.vue'
export default {
  components: { Link },
}
</script>

<style lang="scss">
.sidebar {
  width: 240px;
  margin: 0 auto;
  ul {
    list-style: none;
  }
}
</style>
