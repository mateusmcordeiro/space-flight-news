<template>
  <header :class="$style['space-flight__header']">
    <div :class="$style.container">
      <news-filter :class="$style.filters" @onFilter="doFilter" />
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
</template>
<script>
import Logo from '@/shared/components/assets/Logo.vue';
import NewsFilter from '@/shared/components/organisms/NewsFilter.vue';
import { getCurrentInstance } from '@vue/runtime-core';

export default {
  components: {
    Logo,
    NewsFilter,
  },
  setup() {
    const { ctx } = getCurrentInstance();
    const doFilter = async ({ filters }) => {
      const orientation = filters.orientation === 'asc' ? 'publishedAt' : '';
      await ctx.$store.dispatch('getArticles', {
        params: {
          _sort: orientation,
          title_contains: filters.searchText,
        },
        backward: false,
      });
    };
    return { doFilter };
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
    min-height: 50vh;
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
}
</style>
