import { state, setLocalCartList } from './index'
import { ref } from 'vue'

export default {
  changeCartItemInfo(state, payload) {
    const { shopId, productId, productInfo, num } = payload;

    console.log(state.cartList);

    // let shopInfo = state.cartList[shopId]

    // state.cartList[shopId] = shopInfo

    setLocalCartList(state)
  },

  changeShopName(state, payload) {
    const { shopId, shopName } = payload

    const shopInfo = state.cartList[shopId] || {}

    state.shopName = shopName
    state.cartList[shopId] = shopInfo

    setLocalCartList(state)
  },

  changeCartItemChecked(state, payload) {

    const { shopId, productId } = payload

    const product = state.cartList[shopId]

    setLocalCartList(state)
  },
  cleanCartProducts(state, payload) {

    const { shopId } = payload

    state.cartList[shopId] = {}

    setLocalCartList(state)
  },

  setCartItemsChecked(state, payload) {

    const { shopId } = payload

    const products = state.cartList[shopId]

    if (products) {
      for (let key in products) {
        const product = products[key]
      }
    }

    setLocalCartList(state)
  }
}