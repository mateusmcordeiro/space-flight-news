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
    const getParamsFromQS = () => {
      const params = new URLSearchParams(window.location.search);
      const paginationParams = {};
      for (const [key, value] of params) {
        paginationParams[key] = value;
      }
      return paginationParams;
    };
    onMounted(async () => {
      const paginationParams = getParamsFromQS();
      ctx.$store.dispatch('getArticles', paginationParams);
    });
  },
};
</script>

<style lang="scss" module></style>
