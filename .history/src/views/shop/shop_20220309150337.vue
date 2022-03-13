<template>
  <shop-info :item="nearbyList.value" :hideBorder="true" v-show="item.imgUrl"/>
  <div>shop</div>
</template>

<script>
import ShopInfo from '@/components/common/ShopInfo/ShopInfo'

import { reactive} from "vue";
import { getHotListByShopId } from "@/apis/home";

const useNearByListEffect = () => {
  const nearbyList = reactive([]);

  const getNearByList = async () => {
    const res = await getHotListByShopId();

    if (res.errno === 0) {
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

    getNearByList();

    console.log();

    return { nearbyList, getNearByList };
  },
}
</script>

<style lang="scss" scoped>

</style>