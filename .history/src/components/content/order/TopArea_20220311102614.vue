<template>
  <div id="top-area">
    <div class="top">
      <div class="top_hear"></div>
      <div
        class="top_header_back iconfont icon-back"
        @click="handleBackClick"
      >
      </div>
        <span>确认订单</span>
    </div>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/viriables.scss";

.top {
  position: relative;
  height: 1.96rem;

  background-size: 100% 1.59rem;
  background-image: linear-gradient(0deg, rgba(0, 145, 255, 0) 4%, #0091ff 50%);
  background-repeat: no-repeat;

  &_header {
    position: relative;
    padding-top: 0.26rem;
    line-height: 0.24rem;
    color: $bgColor;
    text-align: center;
    font-size: 0.16rem;

    &_back {
      position: absolute;
      left: 0.18rem;
      font-size: 0.22rem;
    }

  }
}
</style>