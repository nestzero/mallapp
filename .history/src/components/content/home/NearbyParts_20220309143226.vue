<template>
  <div id="nearby_parts">
    <div class="nearby_title">附近店铺</div>

    <router-link
      v-for="item in nearbyList.value"
      :key="item._id"
      to="/shop"
    >
      <shop-info :item="item" />
    </router-link>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { getHotList } from "@/apis/home";
import { onMounted } from "@vue/runtime-core";
import router from "@/router/index.js";

import ShopInfo from "@/components/common/ShopInfo/ShopInfo";

const useNearByListEffect = () => {
  const nearbyList = reactive([]);

  const getNearByList = async () => {
    const res = await getHotList();

    if (res.errno === 0 && res.data.length) {
      nearbyList.value = res.data;
    }
  };

  return { nearbyList, getNearByList };
};

const toShopEffect = () => {
  const toShop = (item) => {
    router.push({
      path: "/shop",
      params: item,
    });
  };

  return { toShop };
};

export default {
  name: "Nearby",
  setup() {
    const { nearbyList, getNearByList } = useNearByListEffect();

    getNearByList();

    const { toShop } = toShopEffect();

    return {
      nearbyList,
      toShop,
    };
  },
  components: {
    ShopInfo,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/viriables.scss";

.nearby_title {
  color: $content-fontcolor;
  font-size: 0.18rem;
  font-family: "PingFangSC-Medium";
  font-weight: normal;

  margin: 0.16rem 0 0.02rem 0;
}

.nearby_item {
  display: flex;
  padding-top: 0.11rem;

  &_img {
    margin-right: 0.16rem;
    width: 0.56rem;
    height: 0.56rem;
  }
}
</style>