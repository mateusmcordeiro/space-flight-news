import { createStore } from 'vuex';
import article from './articles';

export default createStore({
  modules: {
    article,
  },
  plugins: [],
});
