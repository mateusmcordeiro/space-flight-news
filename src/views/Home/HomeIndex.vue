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
      ctx.$store.dispatch('getArticles', {
        params: paginationParams,
        backward: false,
      });
      window.onpopstate = () => {
        const paginationParams = getParamsFromQS();
        ctx.$store.dispatch('getArticles', {
          params: paginationParams,
          backward: true,
        });
      };
    });
  },
};
</script>

<style lang="scss" module></style>
