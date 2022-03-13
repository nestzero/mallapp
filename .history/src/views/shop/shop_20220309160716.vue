<template>
  <div class="shop">
    <div class="search">
      <i class="search_back iconfont icon-back" @click="handleBack"></i>
      
      <div class="search_input">
        <i class="iconfont icon-search"></i>
      </div>
    </div>

    <shop-info :item="nearbyList.item" :hideBorder="true" />
  </div>

  
</template>

<script>
import ShopInfo from "@/components/common/ShopInfo/ShopInfo";
import { useRouter,useRoute } from "vue-router";

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

const userBackEffect=()=>{
  const router=useRouter();

  const handleBack=()=>{
    console.log('/finish');
    router.back();
  }

  return {handleBack}
}

export default {
  name: "shop",
  components: {
    ShopInfo,
  },
  setup() {
    const { nearbyList, getNearByList } = useNearByListEffect();

    const {handleBack}=userBackEffect();

    getNearByList();

    return { nearbyList, getNearByList ,handleBack};
  },
};
</script>

<style lang="scss" scoped>
.shop {
  padding: 0 0.18rem;
}
.search {
  display: flex;

  &_back {
    width: 0.3rem;
    font-size: 0.24rem;
    color: #b6b6b6;
  }

  &_input{
    display: flex;
    flex:1;

    width: 3.1rem;
    height: 0.32rem;

    border-radius: 0.16rem;
    background-color: #f5f5f5;

    
  }
}
</style>