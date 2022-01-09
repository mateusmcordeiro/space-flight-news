<template>
  <div
    :class="{
      [$style['modal-news']]: true,
      [$style['modal-news--active']]: active,
    }"
  >
    <div :class="$style['modal-news__content']">
      <div :class="$style['modal-news__news']">
        <card-news removeTextLimit />
      </div>
      <s-f-button @click="$emit('onClose', e)">Ir para o site</s-f-button>
    </div>
  </div>
</template>
<script>
import { watch } from '@vue/runtime-core';
import SFButton from '@/shared/components/atoms/SFButton.vue';
import CardNews from '@/shared/components/organisms/CardNews.vue';

export default {
  components: {
    SFButton,
    CardNews,
  },
  props: {
    active: Boolean,
  },
  setup(props) {
    watch(
      () => props.active,
      (value) => {
        const appBody = document.querySelector('body');
        if (value) {
          appBody.style.overflow = 'hidden';
        } else {
          appBody.style.overflow = 'auto';
        }
      }
    );
  },
};
</script>
<style lang="scss" module>
@import '~@/design';
.modal-news {
  $self: &;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.85);
  top: 0;
  left: 0;
  z-index: 999;
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
  overflow-x: hidden;
  overflow-y: auto;
  transition: all 0.3s;
  height: 100%;
  width: 100%;

  &--active {
    visibility: visible;
    opacity: 1;
    pointer-events: auto;
  }
  &__content {
    width: 100%;

    position: relative;
    top: 0;
    left: 0;
    margin: 1.7rem auto;
    padding: 2em;
    background: var(--dark);
    border: 2px solid var(--primary);
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: calc(100% - 150px);
    @include media-breakpoint-up(md) {
      max-width: 700px;
    }
    button {
      margin-top: 20px;
    }
    #{$self}__news {
      width: 100%;
    }
  }
}
</style>
