<template>
  <main>
    <router-view />
  </main>
</template>

<script>
export default {
  components: {},
  name: 'App',
  setup() {},
};
</script>
<style lang="scss" scoped>
@import '~@/design/_colors';
main {
  padding-bottom: 50px;
  background-color: $dark-color;
}
</style>
