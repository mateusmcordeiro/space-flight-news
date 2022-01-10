<template>
  <article :class="$style['space-flight__content']">
    <div :class="$style.container">
      <section :class="$style['space-flight__list']">
        <card
          v-for="[id, card] in cardsLoaded"
          :key="id"
          :title="card.title"
          :date="card.date"
          :imageUrl="card.imageUrl"
          :badges="card.badges"
          :summary="card.summary"
          @openNews="openModal($event, id)"
        />
      </section>
      <section :class="$style['space-flight__load-more']">
        <infinite-load
          @onLoadRequested="loadMoreArticles"
          :loading="isLoadingNews"
        />
      </section>
    </div>
    <modal-news
      @onClose="closeModal"
      :news="modalData.data"
      :loading="modalData.loading"
      :active="modalData.active"
    />
  </article>
</template>
<script>
import Card from '@/shared/components/organisms/CardNews.vue';
import InfiniteLoad from '@/shared/components/molecules/InfiniteLoad.vue';
import ModalNews from '@/shared/components/organisms/ModalNews.vue';
import { computed, getCurrentInstance } from 'vue';
export default {
  components: {
    Card,
    InfiniteLoad,
    ModalNews,
  },
  setup() {
    const { ctx } = getCurrentInstance();
    const lastLoadedId = computed(() => {
      return ctx.$store.state.article.modal.lastLoadedId;
    });
    const modalData = computed(() => {
      return {
        ...ctx.$store.state.article.modal,
        data:
          lastLoadedId.value !== null
            ? ctx.$store.state.article.modal.article.get(lastLoadedId.value)
            : null,
      };
    });
    const cardsLoaded = computed(() => {
      return ctx.$store.getters.articles.size > 0
        ? [...ctx.$store.getters.articles]
        : [];
    });
    const isLoadingNews = computed(() => {
      return ctx.$store.getters.isLoading;
    });

    const openModal = async (e, id) => {
      await ctx.$store.dispatch('setModalActive', true);
      await ctx.$store.dispatch('getArticle', id);
    };
    const loadMoreArticles = async () => {
      const pagination = ctx.$store.state.article.pagination;
      ctx.$store.dispatch('getArticles', {
        _limit: pagination._limit + 10,
      });
    };
    const closeModal = async () => {
      await ctx.$store.dispatch('setModalActive', false);
    };

    return {
      openModal,
      closeModal,
      loadMoreArticles,
      isLoadingNews,
      cardsLoaded,
      modalData,
    };
  },
};
</script>
<style lang="scss" module>
@import '~@/design/_colors';
@import '~@/design/_fonts';
@import '~@/design/_sizes';
@import '~@/design/_typography';
@import '~@/design/_layers';
@import '~@/design/_grid';
.space-flight {
  $self: &;

  &__content {
    padding-top: 50px;
    padding-bottom: 50px;
    #{$self}__list {
      align-items: center;
      display: flex;
      flex-direction: column;
      gap: 80px;
      justify-content: center;
    }
  }
}
</style>
