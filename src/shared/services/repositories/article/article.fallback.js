import store from '@store';

function NotFoundException(message) {
  this.message = message;
  this.name = 'NotFoundException';
}

export default () => ({
  fetchList(params = { _limit: 10, _start: 0 }) {
    if (store.getters.articles.has(params.page)) {
      return Promise.resolve({
        data: store.getters.articles.get(params.page),
      });
    }
    throw new NotFoundException('Not found in storage');
  },
  get(articleId) {
    if (store.getters.article.has(articleId)) {
      return Promise.resolve({
        data: store.getters.article.get(articleId),
      });
    }
    throw new NotFoundException('Not found in storage');
  },
});
