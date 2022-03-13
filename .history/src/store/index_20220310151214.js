import Vuex from 'vuex'

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
  // 第一层级是商铺的id
    // shopId: {
    // 第二层是商品id
    // 第二层内容是商品内容以及购物数量
    //   productId: {
    //     _id: '1',
    //     name: '番茄250g/份',
    //     imgUrl: 'http://www.dell-lee.com/imgs/vue3/tomato.png',
    //     sales: 10,
    //     price: 33.6,
    //     oldPrice: 39.6,
    //     count: 2
    //   },
    // },
  cartList: getLocaCartList()
}

export default Vuex.createStore({
  state,
  mutations,
  actions: {
  },
  modules: {
  }
})
