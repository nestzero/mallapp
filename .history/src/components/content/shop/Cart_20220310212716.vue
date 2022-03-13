<template>
  <div
    class="mask"
    v-if="showCart && calculations.total > 0"
    @click="handleCartShowChange"
  />
  <div id="cart">
    <div class="product" v-if="showCart && calculations.total > 0">
      <div class="product_header">
        <div
          class="product_header_all"
          @click="() => setCartItemsChecked(shopId)"
        >
          <span
            class="product_header_icon iconfont"
            v-html="calculations.allChecked ? '&#xe652;' : '&#xe667;'"
          >
          </span>
          全选
        </div>
        <div class="product_header_clear">
          <span
            class="product_header_clear_btn"
            @click="() => cleanCartProducts(shopId)"
            >清空购物车</span
          >
        </div>
      </div>
      <template v-for="item in productList" :key="item._id">
        <div class="product_item" v-if="item.count > 0">
          <div
            class="product_item_checked iconfont"
            v-html="item.check ? '&#xe652;' : '&#xe667;'"
            @click="() => changeCartItemChecked(shopId, item._id)"
          />
          <img class="product_item_img" :src="item.imgUrl" />
          <div class="product_item_detail">
            <h4 class="product_item_title">{{ item.name }}</h4>
            <p class="product_item_price">
              <span class="product_item_yen">&yen;</span>{{ item.price }}
              <span class="product_item_origin"
                >&yen;{{ item.oldPrice }}</span
              >
            </p>
          </div>
          <div class="product_number">
            <span
              class="product_number_minus"
              @click="
                () => {
                  changeCartItemInfo(shopId, item._id, item, -1);
                }
              "
              >-</span
            >
            {{ item.count || 0 }}
            <span
              class="product_number_plus"
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

    console.log(showCart,calculations);

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

.mask {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(0, 0, 0, .5);
  z-index: 1;
}

#cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: 2;
  background: $bgColor;
}

.product {
  overflow-y: scroll;
  flex: 1;
  background: $bgColor;
  &_header {
    display: flex;
    line-height: .52rem;
    border-bottom: 1px solid $content-bgColor;
    font-size: .14rem;
    color: $content-fontcolor;
    &_all {
      width: .64rem;
      margin-left: .18rem;
    }
    &_icon {
      display: inline-block;
      margin-right: .1rem;
      vertical-align: top;
      color: $btn-bgColor;
      font-size: .2rem;
    }
    &_clear {
      flex: 1;
      margin-right: .16rem;
      text-align: right;
      &_btn {
        display: inline-block;
      }
    }
  }
  &_item {
    position: relative;
    display: flex;
    padding: .12rem 0;
    margin: 0 .16rem;
    border-bottom: .01rem solid $content-bgColor;
    &_checked {
      line-height: .5rem;
      margin-right: .2rem;
      color: $btn-bgColor;
      font-size: .2rem;
    }
    &_detail {
      overflow: hidden;
    }
    &_img {
      width: .46rem;
      height: .46rem;
      margin-right: .16rem;
    }
    &_title {
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $content-fontcolor;
      @include ellipsis;
    }
    &_price {
      margin: .06rem 0 0 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $hightlight-fontColor;
    }
    &_yen {
      font-size: .12rem;
    }
    &_origin {
      margin-left: .06rem;
      line-height: .2rem;
      font-size: .12rem;
      color: $light-fontColor;
      text-decoration: line-through;
    }
    .product_number {
      position: absolute;
      right: 0;
      bottom: .26rem;
      &_minus, &_plus
       {
        display: inline-block;
        width: .2rem;
        height: .2rem;
        line-height: .16rem;;
        border-radius: 50%;
        font-size: .2rem;
        text-align: center;
      }
      &_minus {
        border: .01rem solid $medium-fontColor;
        color: $medium-fontColor;
        margin-right: .05rem;
      }
      &_plus {
        background: $btn-bgColor;
        color: $bgColor;
        margin-left: .05rem;
      }
    }
  }
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