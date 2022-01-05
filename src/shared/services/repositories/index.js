import Article from './article/article.repository';
import ApiService from '@core/providers/api.service.provider';

export default (context) => {
  const repositories = {
    article: Article(ApiService('main')),
  };
  context.config.globalProperties.$api = repositories;
};
