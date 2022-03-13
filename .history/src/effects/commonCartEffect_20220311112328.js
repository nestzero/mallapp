import { useStore } from 'vuex'
import {computed} from 'vue'

// 购物车相关逻辑
export const useCommonCartEffect = (shopId) => {
  const store = useStore()
  const cartList =store.state.cartList;

  const changeCartItemInfo = (shopId, productId, productInfo, num) => {
    store.commit('changeCartItemInfo', {
      shopId, productId, productInfo, num
    })
  }

  const productList = computed(() => {
    const productList = cartList[shopId] || [];
    return productList;
  });

  const calculations = computed(() => {
    const productList = cartList[shopId];
    const res = { total: 0, price: 0, allChecked: true };

    if (productList) {
      for (let i in productList) {
        const product = productList[i];

        res.total += product.count;
        res.price += product.count * product.price;

        if (product.count > 0) {
          res.allChecked = false;
        }
      }
    }

    res.price=res.price.toFixed(2);

    return res;
  });

  return { cartList, changeCartItemInfo,productList,calculations }
}