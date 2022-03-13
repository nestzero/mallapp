import { createStore } from 'vuex'

import mutations from './mutations';

const state={
  cartList:getlocalCartList();
}

export default createStore({
  state,
  mutations,
  actions: {
  },
  modules: {
  }
})
