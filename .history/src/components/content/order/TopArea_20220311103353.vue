<template>
  <div id="top-area">
    <div class="top">
      <div class="top_header">
        <div
          class="top_header_back iconfont icon-back"
          @click="handleBackClick"
        ></div>
        <span>确认订单</span>
      </div>

      <div class="top_receiver">
        <div class="top_receiver_title">收货地址</div>
        <div class="top_receiver_address">
          北京理工大学国防科技园2号楼10层
        </div>
        <div class="top_receiver_info">
          <span class="top_receiver_info_name">瑶妹（先生）</span>
          <span class="top_receiver_info_name">18911024266</span>
        </div>
        <div class="top_receiver_icon iconfont icon-enter"></div>
      </div>
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