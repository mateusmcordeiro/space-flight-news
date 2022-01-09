<template>
  <button
    :class="{ [$style.button]: true, [$style.button__outline]: outline }"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>
<script>
export default {
  inheritAttrs: false,
  props: {
    outline: Boolean,
  },
  setup() {},
};
</script>
<style lang="scss" module>
@import '~@/design';
.button {
  $self: &;
  background: var(--shark);
  border: 1px solid var(--shark);
  border-radius: 4px;
  color: white;
  padding: 8px 15px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  @extend %typography-small;
  &:hover {
    background: transparent;
    color: white;
    border: 1px solid white;
  }
  &__outline {
    background: transparent;
    color: var(--shark-light);
    border: 1px solid var(--shark-light);
    &:hover {
      background: var(--shark-light);
      color: white;
      border: 1px solid var(--shark-light);
    }
  }
}
</style>
