<template>
  <div id="nearby_parts">
    <div class="nearby_title">附近店铺</div>

    <div 
    class="nearby_item" 
    v-for="item in nearbyList" 
    :key="item.id">
      
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
  width: 0.72rem;
  height: 0.25rem;

  line-height: 0.25rem;
  color: $content-fontcolor;
  font-size: 0.18rem;
  font-family: "PingFangSC-Medium";
  font-weight: normal;

  margin: 0.16rem 0 0.02rem 0;
}
</style>