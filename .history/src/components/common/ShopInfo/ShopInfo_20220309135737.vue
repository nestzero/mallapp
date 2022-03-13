<template>
  <div id="shop-info">
    <img :src="item.imgUrl" class="nearby_item_img" />

    <div
      :class="{
        nearby_content: true,
        'nearby_content--bordered': hideBorder ? false : true,
      }"
    >
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

#shop-info {
  display: flex;
  padding-top: 0.12rem;
}

.nearby_item_img {
  margin-right: 0.16rem;
  width: 0.56rem;
  height: 0.56rem;
}

.nearby_content {
  flex: 1;

  padding-bottom: 0.12rem;

  &--bordered {
    border-bottom: 1px solid $content-bgColor;
  }

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