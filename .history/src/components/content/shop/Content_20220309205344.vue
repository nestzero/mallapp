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
      {{products}}
    </div>
  </div>
</template>

<script>
import {getShopProductList} from "@/apis/shop"

import { reactive, toRefs } from "vue";
import { useRouter, useRoute } from "vue-router";


const categories = [
  { name: "全部商品", tab: "all" },
  { name: "秒杀", tab: "seckill" },
  { name: "新鲜水果", tab: "fruit" },
];

//处理切换Tab的逻辑
const useCurrentTabEffect = () => {
  const route=useRoute();
  const currentTab = reactive({ currentTab: categories[0].tab });

  const handleTab = (tab) => {
    currentTab.currentTab = tab;

    getShopProductList(route.params.id,tab);
  };

  return { currentTab, handleTab };
};

const useShopProductEffect = () => {
  const route=useRoute();
  const products = reactive({products:[]});

  const getProducts = async (tab) => {
    const res = await getShopProductList(route.params.id,tab);

    if (res.errno === 0 && res.data.length) {
      products.products = res.data;
    }
  };

  return { products, getProducts };
};

export default {
  setup() {
    const route=useRoute();
    const shopid=route.params.id;

    const { currentTab, handleTab } = useCurrentTabEffect();

    const { products, getProducts } = useShopProductEffect();

    

    getProducts(,"all");

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

.product{
  overflow-y: scroll;
  flex: 1;
}
</style>