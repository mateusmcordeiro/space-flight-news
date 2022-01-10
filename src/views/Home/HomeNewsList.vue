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
          :reversed="card.reversed"
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
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  components: {
    Card,
    InfiniteLoad,
    ModalNews,
  },
  setup() {
    const store = useStore();
    const lastLoadedId = computed(() => {
      return store.state.article.modal.lastLoadedId;
    });
    const modalData = computed(() => {
      return {
        ...store.state.article.modal,
        data:
          lastLoadedId.value !== null
            ? store.state.article.modal.article.get(lastLoadedId.value)
            : null,
      };
    });
    const cardsLoaded = computed(() => {
      return store.getters.articles.size > 0 ? [...store.getters.articles] : [];
    });
    const isLoadingNews = computed(() => {
      return store.getters.isLoading;
    });

    const openModal = async (e, id) => {
      await store.dispatch('setModalActive', true);
      await store.dispatch('getArticle', id);
    };
    const loadMoreArticles = async () => {
      const pagination = store.state.article.pagination;
      store.dispatch('getArticles', {
        params: {
          _limit: parseInt(pagination._limit) + 10,
        },
        backward: false,
      });
    };
    const closeModal = async () => {
      await store.dispatch('setModalActive', false);
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
