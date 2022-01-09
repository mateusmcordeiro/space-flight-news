import { createStore } from 'vuex';
import article from './articles';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
  modules: {
    article,
  },
  plugins: [createPersistedState()],
});
