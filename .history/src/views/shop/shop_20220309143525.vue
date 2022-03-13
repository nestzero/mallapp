<template>
  <shop-info :item="nearbyList.value" :hideBorder="true" v-show="item.imgUrl"/>
</template>

<script>
import ShopInfo from '@/components/common/ShopInfo/ShopInfo'

import { reactive} from "vue";
import { getHotListByShopId } from "@/apis/home";

const useNearByListEffect = () => {
  const nearbyList = reactive([]);

  const getNearByList = async () => {
    const res = await getHotListByShopId();

    if (res.errno === 0 && res.data.length) {
      nearbyList.value = res.data;
    }
  };

  return { nearbyList, getNearByList };
};

export default {
  name:'shop',
  components:{
    ShopInfo
  },
  setup() {
    const {nearbyList,getNearByList}=useNearByListEffect();

    console.log();
    getNearByList();

    return { nearbyList, getNearByList };
  },
}
</script>

<style lang="scss" scoped>

</style>