<template>
  <div id="cart">
    <div class="cart_content">
      <div class="cart_content_icon">
        <img
          src="http://www.dell-lee.com/imgs/vue3/basket.png"
          class="cart_content_icon_img"
        />
        <div class="cart_content_icon_tag">{{ total }}</div>
      </div>

      <div class="cart_content_info">
        总计：<span class="cart_content_info_price">&yen; {{ price }}</span>
      </div>
      <div class="cart_content_btn">去结算</div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { reactive, toRefs } from "vue";

// 获取购物车信息逻辑
const useCartEffect = (shopId) => {
  const store = useStore();

  const cartList = store.state.cartList;

  const calculations = computed(() => {
    const productList = cartList[shopId]?.productList;

    const res = reactive(calculations:{ total: 0, price: 0, allChecked: true });

    if (productList) {
      for (let i in productList) {
        const product = productList[i];
        res.total += product.count;
        if (product.check) {
          res.price += product.count * product.price;
        }
        if (product.count > 0 && !product.check) {
          res.allChecked = false;
        }
      }
    }

    res.price = res.price.toFixed(2);

    return res;
  });

  const productList = computed(() => {
    const productList = cartList[shopId] || [];
    return productList;
  });

  return { calculations, productList };
};

export default {
  setup() {
    const route = useRoute();
    const shopId = route.params.id;

    const { calculations, productList } = useCartEffect(shopId);

    return { shopId, ...toRefs(calculations), productList };
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

.cart_content {
  display: flex;
  height: 0.49rem;
  border-top: 0.01rem solid $content-bgColor;
  line-height: 0.49rem;

  &_icon {
    position: relative;
    width: 0.84rem;

    &_img {
      display: block;
      margin: 0.12rem auto;
      width: 0.28rem;
      height: 0.26rem;
    }

    &_tag {
      position: absolute;
      left: 0.46rem;
      top: 0.04rem;
      padding: 0 0.04rem;
      min-width: 0.2rem;
      height: 0.2rem;
      line-height: 0.2rem;
      background-color: $hightlight-fontColor;
      border-radius: 0.1rem;
      font-size: 0.12rem;
      text-align: center;
      color: #fff;
      transform: scale(0.5);
      transform-origin: left center;
    }
  }

  &_info {
    flex: 1;
    color: $content-fontcolor;
    font-size: 0.12rem;

    &_price {
      line-height: 0.49rem;
      color: $hightlight-fontColor;
      font-size: 0.18rem;
    }
  }

  &_btn {
    width: 0.98rem;
    background-color: #4fb0f9;
    text-align: center;
    color: #fff;
    font-size: 0.14rem;
  }
}
</style>