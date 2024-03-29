<template>
  <div
    class="mask"
    v-if="showCart && calculations.total > 0"
    @click="handleCartShowChange"
  />
  <div id="cart">
    <div class="product" v-if="showCart && calculations.total > 0">
      <div class="product_header">
        <div class="product_header_all" @click="setCartItemsChecked(shopId)">
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
            @click="cleanCartProducts(shopId)"
            >清空购物车</span
          >
        </div>
      </div>
      <template v-for="item in productList" :key="item._id">
        <div class="product_item" v-if="item.count > 0">
          <div
            class="product_item_checked iconfont"
            v-html="item.check ? '&#xe652;' : '&#xe667;'"
            @click="changeCartItemChecked(shopId, item._id)"
          />
          <img class="product_item_img" :src="item.imgUrl" />
          <div class="product_item_detail">
            <h4 class="product_item_title">{{ item.name }}</h4>
            <p class="product_item_price">
              <span class="product_item_yen">&yen;</span>{{ item.price }}
              <span class="product_item_origin">&yen;{{ item.oldPrice }}</span>
            </p>
          </div>
          <div class="product_number">
            <span
              class="product_number_minus iconfont icon-minus-circle"
              @click="
                () => {
                  changeCartItemInfo(shopId, item._id, item, -1);
                }
              "
              ></span
            >
            {{ item.count || 0 }}
            <span
              class="product_number_plus iconfont icon-plus-circle"
              @click="
                () => {
                  changeCartItemInfo(shopId, item._id, item, 1);
                }
              "
              ></span
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
          @click="handleCartShowChange"
        />
        <div class="cart_content_icon_tag">{{ calculations.total }}</div>
      </div>

      <div class="cart_content_info">
        总计：<span class="cart_content_info_price"
          >&yen; {{ calculations.price }}</span
        >
      </div>
      <div class="cart_content_btn" v-show="calculations.total > 0">
        <router-link :to="{ path: `/order/${shopId}`}"> 去结算 </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {ref } from "vue";

import { useStore } from "vuex";
import { useRoute } from "vue-router";

import { useCommonCartEffect } from "@/effects/commonCartEffect";

// 处理购物车信息逻辑
const useCartEffect = (shopId) => {

  const { productList, calculations, changeCartItemInfo } =
    useCommonCartEffect(shopId);

  return { productList, calculations, changeCartItemInfo };
};

// 处理隐藏购物车逻辑
const toggleCartEffect = () => {
  const store = useStore();

  const showCart = ref(false);

  const handleCartShowChange = () => {
    showCart.value = !showCart.value;
  };

  const changeCartItemChecked = (shopId, productId) => {
    store.commit("changeCartItemChecked", { shopId, productId });
  };

  //清空购物车，操作vuex
  const cleanCartProducts = (shopId) => {
    console.log(shopId);

    store.commit("cleanCartProducts", { shopId });
  };

  const setCartItemsChecked = (shopId) => {
    store.commit("setCartItemsChecked", { shopId });
  };

  return {
    showCart,
    handleCartShowChange,
    changeCartItemChecked,
    cleanCartProducts,
    setCartItemsChecked,
  };
};

export default {
  setup() {
    const route = useRoute();
    const shopId = route.params.id;

    const { productList, calculations, changeCartItemInfo } =useCartEffect(shopId);

    const {
      showCart,
      handleCartShowChange,
      changeCartItemChecked,
      cleanCartProducts,
      setCartItemsChecked,
    } = toggleCartEffect();

    return {
      shopId,
      calculations,
      productList,
      changeCartItemInfo,
      showCart,
      handleCartShowChange,
      changeCartItemChecked,
      cleanCartProducts,
      setCartItemsChecked,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/viriables.scss";
@import "@/assets/css/mixins.scss";

.mask {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
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
    line-height: 0.52rem;
    border-bottom: 1px solid $content-bgColor;
    font-size: 0.14rem;
    color: $content-fontcolor;

    &_all {
      width: 0.64rem;
      margin-left: 0.18rem;
    }

    &_icon {
      display: inline-block;
      margin-right: 0.1rem;
      vertical-align: top;
      color: $btn-bgColor;
      font-size: 0.2rem;
    }

    &_clear {
      flex: 1;
      margin-right: 0.16rem;
      text-align: right;
      &_btn {
        display: inline-block;
      }
    }
  }

  &_item {
    position: relative;
    display: flex;
    padding: 0.12rem 0;
    margin: 0 0.16rem;
    border-bottom: 0.01rem solid $content-bgColor;

    &_checked {
      line-height: 0.5rem;
      margin-right: 0.2rem;
      color: $btn-bgColor;
      font-size: 0.2rem;
    }

    &_detail {
      overflow: hidden;
    }

    &_img {
      width: 0.46rem;
      height: 0.46rem;
      margin-right: 0.16rem;
    }

    &_title {
      margin: 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $content-fontcolor;
      @include ellipsis;
    }

    &_price {
      margin: 0.06rem 0 0 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $hightlight-fontColor;
    }

    &_yen {
      font-size: 0.12rem;
    }

    &_origin {
      margin-left: 0.06rem;
      line-height: 0.2rem;
      font-size: 0.12rem;
      color: $light-fontColor;
      text-decoration: line-through;
    }

    .product_number {
      position: absolute;
      right: 0;
      bottom: 0.26rem;

      &_minus {
        color: $medium-fontColor;
        margin-right: 0.05rem;
      }

      &_plus {
        color: $btn-bgColor;
        margin-left: 0.05rem;
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