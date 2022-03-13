<template>
  <div id="nearby_parts">
    <div class="nearby_title">附近店铺</div>

    <div class="nearby_item" v-for="item in nearbyList" :key="item.id">
      <img :src="item.imgUrl" class="nearby_item_img" />

      <div class="nearby_content">
        <div class="nearby_content_title">{{ item.name }}</div>
        <div class="nearby_content_tags">
          <span class="nearby_content_tag">{{ item.sales }}</span>
          <span class="nearby_content_tag">{{ item.expressLimit }}</span>
          <span class="nearby_content_tag">{{ item.expressPrice }}</span>
        </div>
        <p class="nearby_content_highlight">{{ item.slogan }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { getHotList } from "@/apis/home";
import { onMounted } from "@vue/runtime-core";

const useNearByListEffect = () => {
  const nearbyList = reactive([]);

  const getNearByList = async () => {
    const res = await getHotList();

    nearbyList = res.data;

    console.log(nearbyList);
  };

  return {nearbyList,getNearByList}
};

export default {
  name: "Nearby",
  setup() {
    const {nearbyList,getNearByList}=useNearByListEffect();

    getNearByList();

    return {
      nearbyList,
    };
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

.nearby_content {
  flex: 1;

  padding-bottom: 0.12rem;

  border-bottom: 0.01rem solid #f6f6f6;

  &_title {
    line-height: 0.22rem;
    font-size: 0.16rem;
    color: $content-fontcolor;
  }

  &_tags {
    margin-top: 0.08rem;
    line-height: 0.18rem;
    font-size: 0.13rem;
    color: $content-fontcolor;
  }

  &_tag {
    margin-right: 0.16rem;
  }

  &_highlight {
    margin: 0.08rem 0 0 0;
    line-height: 0.18rem;
    font-size: 0.13rem;
    color: #e93b3b;
  }
}
</style>