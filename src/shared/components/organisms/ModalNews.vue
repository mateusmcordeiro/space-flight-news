<template>
  <div
    :class="{
      [$style['modal-news']]: true,
      [$style['modal-news--active']]: active,
    }"
  >
    <div :class="$style['modal-news__content']">
      <div :class="$style['modal-news__news']">
        <loading :active="loading" v-if="loading" hasText />
        <template v-else>
          <card-news
            v-if="news !== null"
            :title="news.title"
            :date="news.date"
            :imageUrl="news.imageUrl"
            :badges="news.badges"
            :summary="news.summary"
            removeTextLimit
            removeDetailButton
          />
        </template>
      </div>
      <s-f-button @click="goToPage">Ir para o site</s-f-button>
    </div>
  </div>
</template>
<script>
import { watch } from '@vue/runtime-core';
import SFButton from '@/shared/components/atoms/SFButton.vue';
import CardNews from '@/shared/components/organisms/CardNews.vue';
import Loading from '@/shared/components/atoms/Loading.vue';
export default {
  components: {
    SFButton,
    CardNews,
    Loading,
  },
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    news: {
      type: Object,
      default: null,
    },
    active: Boolean,
  },
  setup(props, { emit }) {
    const goToPage = (e) => {
      emit('onClose', e);
      window.open(props.news.url, '_blank');
    };

    watch(
      () => props.news,
      (value) => {
        console.log(value);
      }
    );
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
    return {
      goToPage,
    };
  },
};
</script>
<style lang="scss" module>
@import '~@/design/_grid';
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
