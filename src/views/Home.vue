<template>
  <header :class="$style['space-flight__header']">
    <div :class="$style.container">
      <news-filter :class="$style.filters" @onFilter="print" />
      <div :class="$style.logo">
        <div :class="$style['logo-radius']">
          <logo :class="$style['logo-svg']" />
        </div>
        <h1>
          Space Flight news
        </h1>
      </div>
    </div>
  </header>
  <article :class="$style['space-flight__content']">
    <div :class="$style.container">
      <section :class="$style['space-flight__list']">
        <card @openNews="print" />
        <card @openNews="print" reversed />
      </section>
      <section :class="$style['space-flight__load-more']">
        <infinite-load
          @onLoadRequested="print"
          :loading="loadingNews.loading"
        />
      </section>
    </div>
    <modal-news
      @onClose="modalData.active = false"
      :active="modalData.active"
    />
  </article>
</template>

<script>
import { reactive } from '@vue/reactivity';

import logo from '@/shared/components/assets/Logo.vue';
import Card from '@/shared/components/organisms/CardNews.vue';
import InfiniteLoad from '@/shared/components/molecules/InfiniteLoad.vue';
import ModalNews from '@/shared/components/organisms/ModalNews.vue';
import NewsFilter from '@/shared/components/organisms/NewsFilter.vue';
export default {
  name: 'App',
  components: {
    logo,
    Card,
    InfiniteLoad,
    ModalNews,
    NewsFilter,
  },
  setup() {
    const loadingNews = reactive({ loading: false });
    const modalData = reactive({ active: false });
    const print = (e) => {
      //loadingNews.loading = !loadingNews.loading;
      //modalData.active = !modalData.active;
      console.log('a', e);
    };
    return { print, loadingNews, modalData };
  },
};
</script>

<style lang="scss" module>
@import '~@/design/_colors';
@import '~@/design/_fonts';
@import '~@/design/_sizes';
@import '~@/design/_typography';
@import '~@/design/_layers';
@import '~@/design/_grid';
.space-flight {
  $self: &;
  &__header {
    align-items: center;
    border-bottom: 2px solid var(--primary);

    display: flex;
    position: relative;
    justify-content: center;
    min-height: 40vh;
    max-height: 100%;
    padding: 93px 0px;

    &:before {
      position: absolute;
      z-index: $layer-page-z-index;
      left: 0;
      top: 0;
      content: ' ';
      height: 100%;
      width: 100%;
      background-position: bottom right;
      background-repeat: no-repeat;
      background-image: url('~@/assets/images/hero-bg.jpg');
      background-size: cover;
      mix-blend-mode: hard-light;
    }
    .container {
      align-items: center;
      z-index: $layer-dropdown-z-index;
      display: flex;
      justify-content: center;
      height: 100%;
      .filters {
        position: absolute;
        right: 20px;
        top: 20px;
      }
    }
    .logo {
      display: flex;
      align-items: center;
      flex-direction: column;

      .logo-radius {
        padding: 30px;
        border-radius: 100%;
        border: 2px solid var(--primary);
      }
      .logo-svg {
        width: 40px;
        fill: var(--primary);
        @include media-breakpoint-up(sm) {
          width: 50px;
        }
        @include media-breakpoint-up(md) {
          width: 80px;
        }
      }
      h1 {
        cursor: pointer;
        @extend %typography-xlarge;
        color: var(--primary);
        span {
          @extend %typography-large;
          color: $primary-color;
        }
      }
    }
  }
  &__content {
    padding-top: 50px;
    padding-bottom: 50px;
    #{$self}__list {
      align-items: center;
      display: flex;
      flex-direction: column;
      gap: 80px;
      justify-content: center;
    }
  }
}
</style>
