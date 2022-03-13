<template>
  <div id="cart">
    <div class="cart">
      <div class="cart_icon">
        <img
          src="http://www.dell-lee.com/imgs/vue3/basket.png"
          class="cart_icon_img"
        />
        <div class="cart_icon_tag">{{ total }}</div>
      </div>
    </div>

    <div class="cart_info">
      总计：<span class="cart_info_price">&yen; {{ price }}</span>
    </div>
    <div class="cart_btn">去结算</div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

// 获取购物车信息逻辑
const useCartEffect = () => {
  const store = useStore();
  const route = useRoute();
  const shopId = route.params.id;
  const cartList = store.state.cartList;

  const total = computed(() => {
    const productList = cartList[shopId];
    let count = 0;
    if (productList) {
      for (let i in productList) {
        const product = productList[i];
        count += product.count;
      }
    }
    return count;
  });

  const price = computed(() => {
    const productList = cartList[shopId];
    let count = 0;
    if (productList) {
      for (let i in productList) {
        const product = productList[i];
        count += product.count * product.price;
      }
    }
    return count;
  });

  return { total, price };
};

export default {
  setup() {
    const { total, price } = useCartEffect();

    return { total, price };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/viriables.scss";

#cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  
}
</style>