<template>
  <home-hero />
  <home-news-list />
</template>

<script>
import { getCurrentInstance, onMounted } from '@vue/runtime-core';
import HomeHero from './HomeHero.vue';
import HomeNewsList from './HomeNewsList.vue';
export default {
  name: 'App',
  components: {
    HomeHero,
    HomeNewsList,
  },
  setup() {
    const { ctx } = getCurrentInstance();
    onMounted(async () => {
      ctx.$store.dispatch('getArticles');
    });
  },
};
</script>

<style lang="scss" module></style>
