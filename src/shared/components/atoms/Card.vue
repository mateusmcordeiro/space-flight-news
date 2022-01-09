<template>
  <div
    :class="{
      [$style.card]: true,
      [$style.card__reversed]: reversed,
      [$style.card__transparent]: transparent,
      [$style.card__full]: fullWidth,
    }"
  >
    <div :class="$style.card__image">
      <slot name="image" />
    </div>
    <div :class="$style.card__content">
      <div :class="$style.card__container">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    reversed: Boolean,
    transparent: Boolean,
    fullWidth: Boolean,
  },
  setup() {},
};
</script>
<style lang="scss" module>
@import '~@/design';
.card {
  $self: &;
  display: flex;
  flex-direction: column;
  background-color: white;

  max-width: 280px;
  width: 100%;
  height: 428px;
  justify-content: space-between;
  overflow: hidden;

  @include media-breakpoint-up(md) {
    flex-direction: row;
    max-width: 650px;
    height: auto;
  }
  &__image {
    height: 200px;
    max-width: 280px;
    overflow: hidden;
    position: relative;
    width: 100%;
    @include media-breakpoint-up(md) {
      max-width: 260px;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__content {
    #{$self}__container {
      max-width: 330px;
      padding: 20px 0px;

      @include media-breakpoint-up(md) {
        padding: 0px 20px 0 40px;
        height: 100%;
      }
    }
  }
  &#{$self}__reversed {
    @include media-breakpoint-up(md) {
      flex-direction: row-reverse;
    }
    #{$self}__container {
      @include media-breakpoint-up(md) {
        padding: 0 40px 0 0;
      }
    }
  }
  &#{$self}__transparent {
    background-color: transparent;
  }
  &#{$self}__full {
    max-width: 100% !important;
    height: 100% !important;
    align-items: center;

    @include media-breakpoint-up(md) {
      align-items: flex-start;
    }
    #{$self}__content {
      @include media-breakpoint-up(sm) {
        max-width: 400px;
      }
      #{$self}__container {
        max-width: 100%;
        @include media-breakpoint-up(md) {
          max-width: 381px;
        }
      }
    }
  }
}
</style>
