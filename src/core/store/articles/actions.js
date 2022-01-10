import dayjs from 'dayjs';
const transformPureObjectToQueryStringObject = (object) => {
  const URLParams = new URLSearchParams();
  Object.entries(object).map(([key, value]) => {
    URLParams.set(key, value);
  });
  return URLParams;
};
const URLObject = (URLSearchParams) => {
  const url = new URL(window.location);
  for (const [key, value] of URLSearchParams) {
    url.searchParams.set(key, value);
  }
  return url;
};
export default {
  setPaginationConfig({ commit, state }, { params, backward }) {
    const pagination = {
      ...state.pagination,
      ...params,
    };
    if (!backward) {
      const URLSearchParams = transformPureObjectToQueryStringObject(
        pagination
      );
      const url = URLObject(URLSearchParams);
      history.pushState(pagination, document.title, url);
    }
    commit('setPaginationConfig', pagination);
  },
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
  async getArticles({ commit, state, dispatch }, { params, backward = false }) {
    try {
      await commit('setLoading', true);
      await dispatch('setPaginationConfig', { params, backward });
      const { data } = await this.$api.article.fetchList(state.pagination);
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
      article.set(id, {
        ...data,
        date: dayjs(data.publishedAt, 'YYYY-MM-DDThh:mm:ss').format(
          'DD/MM/YYYY'
        ),
      });
      await commit('setLastLoaded', id);
      await commit('setModalArticle', article);
      await commit('setModalLoading', false);
    } catch (error) {
      //console.log(error);
    }
  },
};
