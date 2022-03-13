<template>
  <div id="nearby_parts">
    <div class="nearby_title">附近店铺</div>

    <div
      v-for="item in nearbyList.value"
      :key="item._id"
      @click="toShop(item._id)"
    >
      <shop-info :item="item" />
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { getHotList } from "@/apis/home";
import { onMounted } from "@vue/runtime-core";
import {useRouter} from 'vue-router';

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

const toShopEffect=()=>{
  const router=useRouter();

  const toShop=(id)=>{
    router.push(`'/shop/${id}'`)
  }
}

export default {
  name: "Nearby",
  setup() {
    const { nearbyList, getNearByList } = useNearByListEffect();

    con

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

a{
  text-decoration: none;
}

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