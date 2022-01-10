export default {
  setArticles(state, articles) {
    state.articles = articles;
  },
  setModalLoading(state, loading) {
    state.modal.loading = loading;
  },
  setModalActive(state, active) {
    state.modal.active = active;
  },
  setModalArticle(state, article) {
    state.modal.article = article;
  },
  setLoading(state, loading) {
    state.loading = loading;
  },
  setLastLoaded(state, id) {
    state.modal.lastLoadedId = id;
  },
};
