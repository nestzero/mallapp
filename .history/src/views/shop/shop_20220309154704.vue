<template>
  <div class="wrapper">
    <div class="search">
      <i class="search_back iconfont icon-back"></i>
      
    </div>
  </div>

  <shop-info :item="nearbyList.item" :hideBorder="true" />
</template>

<script>
import ShopInfo from "@/components/common/ShopInfo/ShopInfo";
import { useRoute } from "vue-router";

import { reactive, toRefs } from "vue";
import { getHotListByShopId } from "@/apis/home";

const useNearByListEffect = () => {
  const route = useRoute();
  const nearbyList = reactive([]);

  const getNearByList = async () => {
    const res = await getHotListByShopId(route.params.id);

    if (res.errno === 0) {
      nearbyList.item = res.data;
    }
  };

  return { nearbyList, getNearByList };
};

export default {
  name: "shop",
  components: {
    ShopInfo,
  },
  setup() {
    const { nearbyList, getNearByList } = useNearByListEffect();

    getNearByList();

    return { nearbyList, getNearByList };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 0 0.18rem;
}
.search {
  &_back {
    width: 0.3rem;
    font-size: 0.24rem;
    color: #b6b6b6;
  }
}
</style>