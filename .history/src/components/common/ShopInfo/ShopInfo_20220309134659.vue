<template>
  <div id="shop-info">
    <img :src="item.imgUrl" class="nearby_item_img" @click="toShop(item)" />

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
</template>

<script>
export default {
  props: ["item"],
  setup() {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/viriables.scss";

.nearby_item {
  display: flex;
  padding-top: 0.11rem;

  
}
.nearby_item_imgimg {
    margin-right: 0.16rem;
    width: 0.56rem;
    height: 0.56rem;
  }
  
.nearby_item .nearby_content {
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

    &_tag {
      margin-right: 0.16rem;
    }
  }

  &_highlight {
    margin: 0.08rem 0 0 0;
    line-height: 0.18rem;
    font-size: 0.13rem;
    color: #e93b3b;
  }
}
</style>