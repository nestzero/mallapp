<template>
  <shop-info :item="nearbyList.item" :hideBorder="true"/>
</template>

<script>
import ShopInfo from '@/components/common/ShopInfo/ShopInfo'
import {useRouter} from 'vue-router'

import { reactive,toRefs} from "vue";
import { getHotListByShopId } from "@/apis/home";

const useNearByListEffect = () => {
  const router=useRouter();
  const nearbyList = reactive([]);

  const getNearByList = async () => {
    console.log(router.id);
    
    const res = await getHotListByShopId(router.id);

    if (res.errno === 0) {
      nearbyList.item = res.data;
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

    return { nearbyList, getNearByList };
  },
}
</script>

<style lang="scss" scoped>

</style>