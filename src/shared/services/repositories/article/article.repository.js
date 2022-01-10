import Fallback from './article.fallback';
export default (ApiService) => ({
  fetchList(params = { _limit: 10, _start: 0 }) {
    try {
      return Fallback().fetchList(params);
    } catch (error) {
      return ApiService.get(`articles`, params);
    }
  },
  get(articleId) {
    try {
      return Fallback().get(articleId);
    } catch (error) {
      return ApiService.get(`articles/${articleId}`);
    }
  },
});
