<template>
  <div :class="$style.filters">
    <form @submit.prevent="$emit('onFilter', { e: $event, filters })">
      <s-f-input
        name="searchText"
        v-model="filters.searchText"
        placeholder="Search"
        isSearch
      />
      <s-f-select
        v-model="filters.orientation"
        :options="selectOptions"
        :placeholder="'Categoria'"
        :class="$style.select"
        @change="$emit('onFilter', { e: $event, filters })"
      />
    </form>
  </div>
</template>
<script>
import SFInput from '@/shared/components/atoms/SFInput.vue';
import SFSelect from '@/shared/components/atoms/SFSelect.vue';

import { reactive } from '@vue/reactivity';
import { watch } from '@vue/runtime-core';
import { useStore } from 'vuex';
export default {
  components: {
    SFInput,
    SFSelect,
  },
  setup() {
    const store = useStore();
    const selectOptions = [
      { value: '', text: 'Sort', disabled: true },
      { value: 'asc', text: 'Mais antigas', disabled: false },
      { value: 'desc', text: 'Mais novas', disabled: false },
    ];
    const filters = reactive({ searchText: '', orientation: '' });
    watch(
      () => store.state.article.pagination,
      (value) => {
        if (value.title_contains) {
          filters.searchText = value.title_contains;
        }

        if (value._sort) {
          filters.orientation = value._sort === 'publishedAt' ? 'asc' : 'desc';
        }
      }
    );
    return { filters, selectOptions };
  },
};
</script>
<style lang="scss" module>
@import '~@/design/_grid';

.filters {
  form {
    display: flex;
    gap: 4px;
    flex-direction: column;
    @include media-breakpoint-up(sm) {
      flex-direction: row;
      gap: 20px;
    }
    .select {
      min-width: 150px;
    }
  }
}
</style>
