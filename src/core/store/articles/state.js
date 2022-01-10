export default () => ({
  articles: new Map(),
  loading: true,

  modal: {
    lastLoadedId: null,
    article: new Map(),
    active: false,
    loading: false,
  },
  pagination: {
    _limit: 10,
    _start: 0,
    _sort: '',
    title_contains: '',
  },
});
