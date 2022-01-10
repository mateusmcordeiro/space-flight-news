<template>
  <div :class="$style['loading__dots']">
    <div :class="$style['loading__dots__text']" v-if="hasText">Carregando</div>
    <span :class="{ [$style.active]: isActiveDot(0) }"></span>
    <span :class="{ [$style.active]: isActiveDot(1) }"></span>
    <span :class="{ [$style.active]: isActiveDot(2) }"></span>
  </div>
</template>
<script>
import { reactive } from '@vue/reactivity';
import { watch } from '@vue/runtime-core';
export default {
  props: {
    active: Boolean,
    hasText: Boolean,
  },
  setup(props) {
    const loadActiveDot = reactive({ dot: -1, interval: null });
    const isActiveDot = (dot) => {
      return loadActiveDot.dot === dot;
    };
    const startLoadEffect = () => {
      loadActiveDot.dot = 0;
      loadActiveDot.interval = setInterval(() => {
        loadActiveDot.dot = (loadActiveDot.dot + 1) % 3;
      }, 400);
    };
    watch(
      () => props.active,
      (value) => {
        if (value) {
          startLoadEffect();
        } else {
          loadActiveDot.dot = -1;
          clearInterval(loadActiveDot.interval);
        }
      }
    );
    return { isActiveDot };
  },
};
</script>
<style lang="scss" module>
@import '~@/design/_colors';
@import '~@/design/_fonts';
@import '~@/design/_sizes';
@import '~@/design/_typography';
@import '~@/design/_layers';
.loading__dots {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 40px;
  margin-bottom: 40px;
  &__text {
    @extend %typography-small;
    color: var(--shark-light);
  }
  span {
    width: 8px;
    height: 8px;
    background-color: var(--shark-light);
    transition: height 0.4s ease-in-out, width 0.4s ease-in-out;
    &.active {
      height: 14px;
      width: 14px;
    }
  }
}
</style>
