<template>
  <div
    class="mask"
    v-if="showCart && calculations.total > 0"
    @click="handleCartShowChange"
  />
  <div id="cart">
    <div class="product" v-if="showCart && calculations.total > 0">
      <div class="product__header">
        <div
          class="product__header__all"
          @click="() => setCartItemsChecked(shopId)"
        >
          <span
            class="product__header__icon iconfont"
            v-html="calculations.allChecked ? '&#xe652;' : '&#xe667;'"
          >
          </span>
          全选
        </div>
        <div class="product__header__clear">
          <span
            class="product__header__clear__btn"
            @click="() => cleanCartProducts(shopId)"
            >清空购物车</span
          >
        </div>
      </div>
      <template v-for="item in productList" :key="item._id">
        <div class="product__item" v-if="item.count > 0">
          <div
            class="product__item__checked iconfont"
            v-html="item.check ? '&#xe652;' : '&#xe667;'"
            @click="() => changeCartItemChecked(shopId, item._id)"
          />
          <img class="product__item__img" :src="item.imgUrl" />
          <div class="product__item__detail">
            <h4 class="product__item__title">{{ item.name }}</h4>
            <p class="product__item__price">
              <span class="product__item__yen">&yen;</span>{{ item.price }}
              <span class="product__item__origin"
                >&yen;{{ item.oldPrice }}</span
              >
            </p>
          </div>
          <div class="product__number">
            <span
              class="product__number__minus"
              @click="
                () => {
                  changeCartItemInfo(shopId, item._id, item, -1);
                }
              "
              >-</span
            >
            {{ item.count || 0 }}
            <span
              class="product__number__plus"
              @click="
                () => {
                  changeCartItemInfo(shopId, item._id, item, 1);
                }
              "
              >+</span
            >
          </div>
        </div>
      </template>
    </div>

    <div class="cart_content">
      <div class="cart_content_icon">
        <img
          src="http://www.dell-lee.com/imgs/vue3/basket.png"
          class="cart_content_icon_img"
        />
        <div class="cart_content_icon_tag">{{ calculations.total }}</div>
      </div>

      <div class="cart_content_info">
        总计：<span class="cart_content_info_price"
          >&yen; {{ calculations.price }}</span
        >
      </div>
      <div class="cart_content_btn">去结算</div>
    </div>
  </div>
</template>

<script>
import { computed, reactive, toRefs } from "vue";

import { useStore } from "vuex";
import { useRoute } from "vue-router";

import { useCommonCartEffect } from "./commonCartEffect";

// 获取购物车信息逻辑
const useCartEffect = (shopId) => {
  const store = useStore();

  const { cartList, changeCartItemInfo } = useCommonCartEffect();

  const calculations = computed(() => {
    const productList = cartList[shopId];
    const res = reactive({ total: 0, price: 0, allChecked: true });

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

    return { ...toRefs(res) };
  });

  const productList = computed(() => {
    const productList = cartList[shopId] || [];
    return productList;
  });

  return { calculations, productList, changeCartItemInfo };
};

// 展示隐藏购物车逻辑
const toggleCartEffect = () => {
  const res = reactive({ showCart: false });

  const handleCartShowChange = () => {
    res.showCart = !res.showCart;
  };

  return { ...toRefs(res), handleCartShowChange };
};

export default {
  setup() {
    const route = useRoute();
    const shopId = route.params.id;

    const { calculations, productList, changeCartItemInfo } =
      useCartEffect(shopId);

    const { showCart, handleCartShowChange } = toggleCartEffect();

    return {
      calculations,
      productList,
      changeCartItemInfo,
      showCart,
      handleCartShowChange,
    };
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

  z-index: 2;
  background: $bgColor;
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