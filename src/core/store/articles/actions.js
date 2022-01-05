export default {
  setArticles({ commit, state }) {
    commit('setArticles', state);
  },
  setArticle({ commit, state }) {
    commit('setArticle', state);
  },
  setLoading({ commit, state }) {
    commit('setLoading', state);
  },
};
