<template>
  <div class="shop">
    <div class="search">
      <i class="search_back iconfont icon-back" @click="handleBack"></i>

      <div class="search_content">
        <i class="search_content_icon iconfont icon-search"></i>
        <input
          class="search_content_text"
          type="text"
          placeholder="请输入商品名称搜索"
        />
      </div>
    </div>

    <shop-info :item="nearbyList.item" :hideBorder="true" />
  </div>
</template>

<script>
import ShopInfo from "@/components/common/ShopInfo/ShopInfo";
import { useRouter, useRoute } from "vue-router";

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

const userBackEffect = () => {
  const router = useRouter();

  const handleBack = () => {
    console.log("/finish");
    router.back();
  };

  return { handleBack };
};

export default {
  name: "shop",
  components: {
    ShopInfo,
  },
  setup() {
    const { nearbyList, getNearByList } = useNearByListEffect();

    const { handleBack } = userBackEffect();

    getNearByList();

    return { nearbyList, getNearByList, handleBack };
  },
};
</script>

<style lang="scss" scoped>
.shop {
  padding: 0 0.18rem 0;
}

.search {
  display: flex;
  margin: .14rem 0 .04rem 0;
  line-height: .32rem;

  &_back {
    width: 0.3rem;
    font-size: 0.24rem;
    color: #b6b6b6;
  }

  &_content {
    display: flex;
    flex: 1;

    border-radius: .16rem;
    background-color: #f5f5f5;

    &_icon {
      width: 0.44rem;
      text-align: center;

      background-color: #f5f5f5;
    }

    &_text {
      display: block;
      width: 100%;
      padding-right: 0.2rem;

      border: none;
      outline: none;
      background: none;
      height: .32rem;
      font-size: .14rem;
      color: #333;
      &::placeholder {
        color: #333;
      }
    }
  }
}
</style>