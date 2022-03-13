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

    <div class="product"></div>
  </div>
</template>

<script>
import {getShopProductList} from "@/js"

import { reactive, toRefs } from "vue";

const categories = [
  { name: "全部商品", tab: "all" },
  { name: "秒杀", tab: "seckill" },
  { name: "新鲜水果", tab: "fruit" },
];

//处理切换Tab的逻辑
const useCurrentTabEffect = () => {
  const currentTab = reactive({ currentTab: categories[0].tab });

  const handleTab = (tab) => {
    currentTab.currentTab = tab;

    getShopProductList(tab);
  };

  return { currentTab, handleTab };
};

const useShopProductEffect = () => {
  const products = reactive([]);

  const getProducts = async () => {
    const res = await getShopProductList(tab);

    if (result.errno === 0 && result.data.length) {
      products = res.data;
    }
  };

  return { products, getProducts };
};

export default {
  setup() {
    const { currentTab, handleTab } = useCurrentTabEffect();

    const { products, getProducts } = useShopProductEffect();

    getProducts("all");

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
</style>