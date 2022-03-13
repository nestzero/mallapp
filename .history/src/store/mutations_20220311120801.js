import { state, setLocalCartList } from './index'

export default {
  changeCartItemInfo(state, payload) {
    const { shopId, productId, productInfo, shopName } = payload;
    let shopInfo = state.cartList[shopId] || { shopName: '' }
    if (!shopInfo) { shopInfo = {} }
    let product = shopInfo[productId]
    if (!product) {
      product = productInfo
      product.count = 0
    }
    product.count = product.count + payload.num
    if (product.count < 0) { product.count = 0 }
    shopInfo[productId] = product
    state.cartList[shopId] = shopInfo

    setLocalCartList(state)
  },

  changeShopName(state, payload) {
    const { shopId, shopName } = payload

    const shopInfo = state.cartList[shopId] || {
      shopName: '', productList: {}
    }

    shopInfo.shopName = shopName
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