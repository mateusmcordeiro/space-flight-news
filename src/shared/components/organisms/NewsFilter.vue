<template>
  <div :class="$style.filters">
    <form @submit.prevent="$emit('onFilter', { e: $event, filters })">
      <s-f-input
        name="searchText"
        v-model="filters.searchText"
        placeholder="Search"
        isSearch
      />
    </form>
  </div>
</template>
<script>
import SFInput from '@/shared/components/atoms/SFInput.vue';
import { reactive } from '@vue/reactivity';

export default {
  components: {
    SFInput,
  },
  setup() {
    const filters = reactive({ searchText: '', orientation: 'asc' });
    return { filters };
  },
};
</script>
<style lang="scss" module>
.filters {
  display: flex;
}
</style>
