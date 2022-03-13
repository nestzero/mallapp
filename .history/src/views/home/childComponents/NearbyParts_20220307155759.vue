<template>
  <div id="nearby_parts">
    <div class="nearby_title">附近店铺</div>

    <div class="nearby_item" v-for="item in nearbyList" :key="item.id">
      <img :src="item.imgUrl" class="nearby_item_img" />

      <div class="nearby_content">
        <div class="nearby_content_title">{{ item.title }}</div>
        <div class="nearby_content_tags">
          <span
            class="nearby_content_tag"
            v-for="(innerItem, innerIndex) in item.tags"
            :key="innerIndex"
            >{{ innerItem }}</span
          >
        </div>
        <p class="nearby__content__highlight">{{ item.desc }}</p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nearbyList: [
        {
          id: 1,
          imgUrl: "http://www.dell-lee.com/imgs/vue3/near.png",
          title: "沃尔玛",
          tags: ["月售1万+", "起送¥0", "基础运费¥5"],
          desc: "VIP尊享满89元减4元运费券（每月3张）",
        },
        {
          id: 2,
          imgUrl: "http://www.dell-lee.com/imgs/vue3/near.png",
          title: "沃尔玛",
          tags: ["月售1万+", "起送¥5", "基础运费¥5"],
          desc: "VIP尊享满89元减4元运费券（每月3张）",
        },
      ],
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
  padding-top: 0.12rem;

  &_img {
    margin-right: 0.16rem;
    width: 0.56rem;
    height: 0.56rem;
  }

  &_content{
    
  }
}
</style>