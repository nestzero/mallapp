<template>
  <div id="content">
    <div class="categories">
      <div
        class="categories_item"
        v-for="(item, index) in categories"
        :key="index"
        :class="{ actived: currentTab === item.tab }"
      >
        {{ item.name }}
      </div>
    </div>

    <div class="product"></div>
  </div>
</template>

<script>
import { reactive, ref,toRefs } from "vue";

const categories = [
  { name: "全部商品", tab: "all" },
  { name: "秒杀", tab: "seckill" },
  { name: "新鲜水果", tab: "fruit" },
];

const useCurrentTabEffect = () => {
  const currentTab = reactive(categories[0].tab);

  const handleTab = (tab) => {
    currentTab.value = tab;
  };

  return { currentTab, handleTab };
};

export default {
  setup() {
    const { currentTab, handleTab } = useCurrentTabEffect();

    

    return {
      categories,
      ...toRef(currentTab),
      handleTab,
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