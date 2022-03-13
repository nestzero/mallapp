<template>
  <div id="nearby_parts">
    <div class="nearby_title">附近店铺</div>

    <router-link
      v-for="(item,index) in nearbyList.value"
      :key="index"
      :to="`/shop/${item._id}`"
    >
      <ShopInfo :item="item" />
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

export default {
  name: "Nearby",
  setup() {
    const { nearbyList, getNearByList } = useNearByListEffect();

    getNearByList();

    return {
      nearbyList,
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


</style>