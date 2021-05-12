<template>
  <div>
    <h1 class="title">
      <div>
        <span>{{ $t('HELLO_WORLD') }}</span>
      </div>
    </h1>
    <div class="links">
      <div>
        <n-link :to="localePath('/1')">1へ</n-link>
      </div>
      <div>
        <n-link :to="localePath('/2')">2へ</n-link>
      </div>
      <div>
        <n-link :to="localePath('/3')">3へ</n-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
