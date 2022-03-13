<template>
  <div id="content">
    <div class="categories">
      <div
        class="categories_item"
        v-for="(item, index) in categories"
        :key="index"
        :class="{ actived: currentTab === item.tab }"
        @click="handleTab(item.tab)"
      >
        {{ item.name }}
      </div>
    </div>

    <div class="product">
      <div class="product_item" v-for="(item, index) in products" :key="index">
        <img class="product_item_img" :src="item.imgUrl" />

        <div class="product_item_detail">
          <h4 class="product_item_title">{{ item.name }}</h4>
          <p class="product_item_sales">月售 {{ item.sales }} 件</p>
          <p class="product_item_price">
            <span class="product_item_yen">&yen;</span>{{ item.price }}
            <span class="product_item_origin">&yen;{{ item.oldPrice }}</span>
          </p>
        </div>

        <div class="product_number">
          <span class="product_number_minus iconfont icon-minus-circle"
          @click="changeCartItem(shopId, item._id, item, -1,props.shopName)"
          ></span>
          {{getProductCartCount(shopId, item._id)}}
          <span class="product_number_plus iconfont icon-plus-circle"
            @click="changeCartItem(shopId, item._id, item, 1,props.shopName)"
          ></span>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { getShopProductList } from "@/apis/shop";

import { reactive, toRefs } from "vue";
import { useRouter, useRoute } from "vue-router";

import {useStore} from "vuex"

import { useCommonCartEffect } from '@/effects/commonCartEffect'

const categories = [
  { name: "全部商品", tab: "all" },
  { name: "秒杀", tab: "seckill" },
  { name: "新鲜水果", tab: "fruit" },
];

//处理切换Tab的逻辑
const useCurrentTabEffect = (shopId) => {
  const currentTab = reactive({ currentTab: categories[0].tab });

  const handleTab = (tab) => {
    currentTab.currentTab = tab;

    getShopProductList(shopId, tab);
  };

  return { currentTab, handleTab };
};

//商品列表相关的逻辑
const useShopProductEffect = (shopId) => {
  const products = reactive({ products: [] });

  const getProducts = async (tab) => {
    const res = await getShopProductList(shopId, tab);

    if (res.errno === 0 && res.data.length) {
      products.products = res.data;
    }
  };

  return { products, getProducts };
};

// 购物车相关逻辑
const useCartEffect = () => {
  const store=useStore();

  const { cartList, changeCartItemInfo,getProductCartCount} = useCommonCartEffect()

  const changeShopName = (shopId, shopName) => {
    store.commit('changeShopName', { shopId, shopName })
  }

  const changeCartItem = (shopId, productId, item, num,shopName) => {
    changeCartItemInfo(shopId, productId, item, num)

    changeShopName(shopId, shopName)
  }

  return { cartList, changeCartItem,getProductCartCount }
}


export default {
  props:['shopName'],
  setup(props) {
    const route = useRoute();
    const shopId = route.params.id;

    const { currentTab, handleTab } = useCurrentTabEffect(shopId);

    const { products, getProducts } = useShopProductEffect(shopId);

    const { cartList, changeCartItem,getProductCartCount }=useCartEffect();


    getProducts(shopId, "all");

    return {
      props,
      categories,shopId,
      ...toRefs(currentTab),
      ...toRefs(products),
      cartList,
      handleTab,
      getProducts,
      changeCartItem,
      getProductCartCount,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/viriables.scss";
@import "@/assets/css/mixins.scss";

#content {
  display: flex;
  position: absolute;

  left: 0;
  right: 0;

  top: 1.5rem;
  bottom: 0.5rem;
}

.categories {
  overflow-y: scroll;

  height: 100%;
  width: 0.76rem;

  background-color: $search-bgColor;

  &_item {
    line-height: 0.4rem;
    text-align: center;
    font-size: 14px;
    color: #333;
  }
}
.actived {
  background: $bgColor;
}

.product {
  overflow-y: scroll;
  flex: 1;

  &_item {
    position: relative;
    display: flex;
    padding: 0.12rem 0;
    margin: 0 0.16rem;
    border-bottom: 0.01rem solid $content-bgColor;

    &_detail {
      overflow: hidden;
    }

    &_img {
      width: 0.68rem;
      height: 0.68rem;
      margin-right: 0.16rem;
    }

    &_title {
      margin: 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $content-fontcolor;
      @include ellipsis;
    }

    &_sales {
      margin: 0.06rem 0;
      font-size: 0.12rem;
      color: $content-fontcolor;
    }

    &_price {
      margin: 0;
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

    .product_number{
      position: absolute;
      right: 0;
      bottom: .12rem;
      line-height: .18rem;

      &_minus {
        position: relative;
        top:.02rem;

        color: $medium-fontColor;
        margin-right: .06rem;
      }

      &_plus {position: relative;
        top:.02rem;

        color: $btn-bgColor;
        margin-left: .06rem;
      }

    }
  }
}
</style>