<template>
  <div
    :class="{
      [$style['infinite-load']]: true,
    }"
  >
    <loading :active="loading" />
    <s-f-button @click="loadMore" outline>{{ buttonText }}</s-f-button>
  </div>
</template>
<script>
import SFButton from '@/shared/components/atoms/SFButton.vue';
import Loading from '@/shared/components/atoms/Loading.vue';
import { computed } from '@vue/runtime-core';
export default {
  components: {
    SFButton,
    Loading,
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

    const buttonText = computed(() =>
      props.loading ? 'Carregando...' : 'Carregar mais'
    );

    return {
      loadMore,
      buttonText,
    };
  },
};
</script>
<style lang="scss" module>
.infinite-load {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
