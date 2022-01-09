<template>
  <div :class="$style.badge">
    <slot />
  </div>
</template>
<script>
export default {
  setup() {},
};
</script>
<style lang="scss" module>
@import '~@/design';
.badge {
  @extend %typography-small-x;
  border: 1px solid white;
  color: white;
  padding: 0px 4px;
}
</style>
