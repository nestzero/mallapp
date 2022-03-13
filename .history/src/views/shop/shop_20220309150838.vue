<template>
  <!-- <shop-info :item="item" :hideBorder="true" v-show="item.imgUrl"/> -->
  <div>shop</div>
</template>

<script>
import ShopInfo from '@/components/common/ShopInfo/ShopInfo'

import { reactive,toRefs} from "vue";
import { getHotListByShopId } from "@/apis/home";

const useNearByListEffect = () => {
  const nearbyList = reactive([]);

  const getNearByList = async () => {
    const res = await getHotListByShopId();

    if (res.errno === 0) {
      nearbyList.item = res.data;
      console.log(...toRefs(nearbyList));
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
    const {item,getNearByList}=useNearByListEffect();

    getNearByList();

    return { item, getNearByList };
  },
}
</script>

<style lang="scss" scoped>

</style>