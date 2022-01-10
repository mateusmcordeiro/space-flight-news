export default {
  articles(state) {
    return state.articles;
  },

  article(state) {
    return state.modal.article;
  },
  isLoading(state) {
    return state.loading;
  },
};
