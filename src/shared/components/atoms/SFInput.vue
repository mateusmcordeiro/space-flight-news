<template>
  <div :class="{ [$style.input]: true, [$style.input__search]: isSearch }">
    <div :class="$style.input__content">
      <input v-bind="$attrs" :value="modelValue" @input="updateInput" />
      <button type="submit" :class="$style['input__search-button']">
        <vue-feather type="search"></vue-feather>
      </button>
    </div>
  </div>
</template>
<script>
import VueFeather from 'vue-feather';

export default {
  components: {
    VueFeather,
  },
  inheritAttrs: false,
  props: {
    isSearch: Boolean,
    modelValue: {
      type: [String, Number],
      default: '',
    },
  },
  setup(props, { emit }) {
    const updateInput = (e) => {
      emit('update:modelValue', e.target.value);
    };
    return { updateInput };
  },
};
</script>
<style lang="scss" module>
@import '~@/design/_colors';
@import '~@/design/_fonts';
@import '~@/design/_sizes';
@import '~@/design/_typography';
.input {
  height: 34px;
  width: 100%;
  max-width: 230px;
  $self: &;
  border: 1px solid var(--primary);
  &__content {
    height: 100%;
    #{$self}__search {
      &-button {
        opacity: 0;
        visibility: hidden;
      }
    }
    input {
      border: none;
      background: transparent;
      color: var(--primary);
      padding: 0px 10px;
      @extend %typography-small;
    }
  }
  &#{$self}__search {
    position: relative;
    input {
      height: 100%;
      width: 100%;
      &:hover {
      }
    }
    #{$self}__search-button {
      align-items: center;
      background: var(--primary);
      border: none;
      bottom: 0;
      cursor: pointer;
      display: flex;

      height: 24px;
      justify-content: center;
      margin: auto;

      opacity: 1;
      outline: none;
      position: absolute;
      right: 4px;
      visibility: visible;

      top: 0;

      width: 24px;

      &:hover {
        background: transparent;
        border: 1px solid var(--primary);
      }
      i {
        width: 16px;
        svg {
          transition: stroke 0.3s ease-in-out;
          stroke: var(--dark);
        }
      }
      &:hover {
        i {
          svg {
            transition: stroke 0.3s ease-in-out;
            stroke: var(--primary);
          }
        }
      }
    }
  }
}
</style>
