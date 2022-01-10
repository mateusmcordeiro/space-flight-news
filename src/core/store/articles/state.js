export default () => ({
  articles: new Map(),
  loading: true,

  modal: {
    lastLoadedId: null,
    article: new Map(),
    active: false,
    loading: false,
  },
});
