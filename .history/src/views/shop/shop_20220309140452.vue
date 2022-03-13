<template>
  <shop-info :item="item" :hideBorder="true" v-show="item.imgUrl"/>
</template>

<script>
import ShopInfo from '@/components/common/ShopInfo/ShopInfo'
import { onMounted } from '@vue/runtime-core'

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

    return { nearbyList, getNearByList };
  },
}
</script>

<style lang="scss" scoped>

</style>