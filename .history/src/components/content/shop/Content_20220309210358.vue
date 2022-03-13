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

      </div>
    </div>
  </div>
</template>

<script>
import { getShopProductList } from "@/apis/shop";

import { reactive, toRefs } from "vue";
import { useRouter, useRoute } from "vue-router";

const categories = [
  { name: "全部商品", tab: "all" },
  { name: "秒杀", tab: "seckill" },
  { name: "新鲜水果", tab: "fruit" },
];

//处理切换Tab的逻辑
const useCurrentTabEffect = (shopid) => {
  const currentTab = reactive({ currentTab: categories[0].tab });

  const handleTab = (tab) => {
    currentTab.currentTab = tab;

    getShopProductList(shopid, tab);
  };

  return { currentTab, handleTab };
};

const useShopProductEffect = (shopid) => {
  const products = reactive({ products: [] });

  const getProducts = async (tab) => {
    const res = await getShopProductList(shopid, tab);

    if (res.errno === 0 && res.data.length) {
      products.products = res.data;
    }
  };

  return { products, getProducts };
};

export default {
  setup() {
    const route = useRoute();
    const shopid = route.params.id;

    const { currentTab, handleTab } = useCurrentTabEffect(shopid);

    const { products, getProducts } = useShopProductEffect(shopid);

    getProducts(shopid, "all");

    return {
      categories,
      ...toRefs(currentTab),
      ...toRefs(products),
      handleTab,
      getProducts,
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
      line-height: .2rem;
      font-size: .14rem;
      color: $content-fontcolor;
      @include ellipsis;
    }

    &_sales {
      margin: .06rem 0;
      font-size: .12rem;
      color: $content-fontcolor;
    }
    
    &_price {
      margin: 0;
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
  }
}
</style>