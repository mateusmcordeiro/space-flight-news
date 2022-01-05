
<template>
  <div class="loading" :class="{'active': loading}">

  </div>
</template>
<script>
import { useState } from '@state/movie';

export default {
  setup() {
    const state = useState();
    const loading = state.pagination.loading;
    return { loading }
  }
}
</script>

<style lang="scss" scoped>
  @import "@design";
  .loading {
    position: fixed;
    height: 100vh;
    width: 100%;
    background-color: $dark-color;
    z-index: 999;
    left: 0;
    top: 0;
    display: none;
    &.active {
      display: block;
    }
  }
</style>