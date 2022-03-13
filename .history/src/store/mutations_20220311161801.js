import { state, setLocalCartList } from './index'

export default {
  changeCartItemInfo(state, payload) {
    const { shopId, productId, productInfo } = payload;

    if (state.cartList === {}) {

    } else {
      
      let shopInfo = state.cartList[shopId] || {
        shopName: '', productList: {}
      }

      let product = shopInfo.productList[productId]
      if (!product) {
        productInfo.count = 0
        product = productInfo
      }
      product.count = product.count + payload.num
      if (payload.num > 0) { product.check = true }
      if (product.count < 0) { product.count = 0 }
      shopInfo.productList[productId] = product
      state.cartList[shopId] = shopInfo
    }



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