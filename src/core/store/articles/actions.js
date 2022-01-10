import dayjs from 'dayjs';

export default {
  setArticles({ commit }, data) {
    commit('setArticles', data);
  },
  setArticle({ commit }, data) {
    commit('setArticle', data);
  },
  setLoading({ commit }, data) {
    commit('setLoading', data);
  },
  setModalLoading({ commit }, loading) {
    commit('setModalLoading', loading);
  },
  setModalActive({ commit }, active) {
    commit('setModalActive', active);
  },
  setModalArticle({ commit }, article) {
    commit('setModalArticle', article);
  },
  setLastLoaded({ commit }, id) {
    commit('setLastLoaded', id);
  },
  async getArticles({ commit }) {
    try {
      await commit('setLoading', true);
      const { data } = await this.$api.article.fetchList();
      const map = new Map();
      data.map((article, index) => {
        const newContent = {
          ...article,
          badges: [{ id: 1, text: article.newsSite }],
          date: dayjs(article.publishedAt, 'YYYY-MM-DDThh:mm:ss').format(
            'DD/MM/YYYY'
          ),
          reversed: index % 2 === 0 + 1,
        };
        map.set(article.id, newContent);
        return { ...newContent };
      });

      await commit('setArticles', map);
      await commit('setLoading', false);
    } catch (error) {
      //console.log(error);
    }
  },
  async getArticle({ commit, state }, id) {
    try {
      await commit('setModalLoading', true);
      const { data } = await this.$api.article.get(id);
      const article = state.modal.article;
      article.set(id, data);
      await commit('setLastLoaded', id);
      await commit('setArticle', article);
      await commit('setModalLoading', false);
    } catch (error) {
      //console.log(error);
    }
  },
};
