import { createStore } from 'vuex'

import mutations from './mutations';

const setLocalCartList = (state) => {
  const { cartList } = state
  const cartListString = JSON.stringify(cartList)
  localStorage.cartList = cartListString
}

const getLocaCartList = () => {
  // { shopId: {shopName:'', productList:{ productId: {} }}}
  return JSON.parse(localStorage.cartList) || {}
}

const state={
  cartList:getlocalCartList()
}

export default createStore({
  state: {
    cartList: getLocaCartList()
  },
  mutations,
  actions: {
  },
  modules: {
  }
})
