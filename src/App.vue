<template>
  <main>
    <router-view />
  </main>
</template>

<script>
import { onMounted, getCurrentInstance } from 'vue';
export default {
  components: {},
  name: 'App',
  setup() {
    const { ctx } = getCurrentInstance();
    onMounted(async () => {
      console.log(await ctx.$api.article.fetchList());
    });
  },
};
</script>
<style lang="scss" scoped>
@import '~@/design/_colors';
main {
  padding-bottom: 50px;
  background-color: $dark-color;
}
</style>
