import { useStore } from 'vuex'

import { reactive, toRefs } from "vue";

// 购物车相关逻辑
export const useCommonCartEffect = () => {
  const store = useStore()
  const cartList = reactive({cartList:store.state.cartList});

  const changeCartItemInfo = (shopId, productId, productInfo, num) => {
    store.commit('changeCartItemInfo', {
      shopId, productId, productInfo, num
    })
  }

  return { cartList, changeCartItemInfo }
}