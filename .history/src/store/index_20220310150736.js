import { createStore } from 'vuex'

import mutations from './mutations';

const setLocalCartList = (state) => {
  const { cartList } = state
  const cartListString = JSON.stringify(cartList)
  localStorage.cartList = cartListString
}

const state={
  cartList:getlocalCartList()
}

export default createStore({
  state,
  mutations,
  actions: {
  },
  modules: {
  }
})
