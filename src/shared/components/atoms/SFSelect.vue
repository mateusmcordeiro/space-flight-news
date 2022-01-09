<template>
  <div :class="$style.select">
    <select v-bind="$attrs" :value="modelValue" @input="updateInput">
      <option
        v-for="option in options"
        :value="option.value"
        :key="option.value"
        :disabled="option.disabled"
      >
        {{ option.text }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  props: {
    options: Array,
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
.select {
  height: 34px;
  select {
    width: 100%;
    padding: 2px 4px;
    height: 100%;
    background: transparent;
    border: 1px solid var(--primary);
    color: var(--primary);
    @extend %typography-small;
    option {
      margin-top: 10px;
    }
  }
}
</style>
