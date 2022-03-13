import Vuex from 'vuex'

import mutations from './mutations';

export const setLocalCartList = (state) => {
  const { cartList,shopName} = state

  const cartListString = JSON.stringify(cartList)

  const shopNameString=JSON.stringify(shopName);


  localStorage.cartList = cartListString

  localStorage.shopName=shopNameString
}

const getLocaCartList = () => {
  // { shopId: {shopName:'', productList:{ productId: {} }}}
  // return JSON.parse(localStorage.cartList) || {}
  if (localStorage.cartList ===undefined) {
    return {}
  }else{
    return JSON.parse(localStorage.cartList)
  }
}

const getLocalShopName=()=>{
  if (localStorage.shopName ===undefined) {
    return ''
  }else {
    return JSON.parse(localStorage.shopName)
  }
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
  cartList: getLocaCartList(),

  shopName:getLocalShopName()
}

export default Vuex.createStore({
  state,
  mutations,
  actions: {
  },
  modules: {
  }
})
