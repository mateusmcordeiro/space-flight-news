<template>
  <div
    :class="{
      [$style['infinite-load']]: true,
      [$style['infinite-load--loading']]: loading,
    }"
  >
    <div :class="$style['infinite-load__dots']">
      <span :class="{ [$style.active]: isActiveDot(0) }"></span>
      <span :class="{ [$style.active]: isActiveDot(1) }"></span>
      <span :class="{ [$style.active]: isActiveDot(2) }"></span>
    </div>
    <s-f-button @click="loadMore" outline>{{ buttonText }}</s-f-button>
  </div>
</template>
<script>
import SFButton from '@/shared/components/atoms/SFButton.vue';
import { reactive } from '@vue/reactivity';
import { computed, watch } from '@vue/runtime-core';
export default {
  components: {
    SFButton,
  },
  props: {
    disabled: Boolean,
    loading: Boolean,
  },
  setup(props, { emit }) {
    const loadMore = (e) => {
      if (!props.disabled && !props.loading) {
        emit('onLoadRequested', e);
      }
    };

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
    const buttonText = computed(() =>
      props.loading ? 'Carregando...' : 'Carregar mais'
    );
    watch(
      () => props.loading,
      (value) => {
        if (value) {
          startLoadEffect();
        } else {
          loadActiveDot.dot = -1;
          clearInterval(loadActiveDot.interval);
        }
      }
    );

    return {
      loadMore,
      isActiveDot,
      buttonText,
    };
  },
};
</script>
<style lang="scss" module>
.infinite-load {
  $self: &;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__dots {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 40px;
    margin-bottom: 40px;
    span {
      width: 8px;
      height: 8px;
      background-color: var(--shark-light);
      transition: height 0.4s ease-in-out, width 0.4s ease-in-out;
    }
  }
  &--loading {
    #{$self}__dots {
      span {
        transition: height 0.4s ease-in-out, width 0.4s ease-in-out;
        &.active {
          height: 10px;
          width: 10px;
        }
      }
    }
  }
}
</style>
