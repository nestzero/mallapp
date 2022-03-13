import {setLocalCartList} from './index'

export default {
  changeCartItemInfo(state, payload) {
    const { shopId, productId, productInfo } = payload;
    let shopInfo = state.cartList[shopId]
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
  }
}