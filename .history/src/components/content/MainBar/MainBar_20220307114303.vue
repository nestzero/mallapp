<template>
  <div id="mainBar">
    <div class="mainBar_item">
      <div class="iconfont icon-home"></div>
      <div class="mainBar_item_title">首页</div>
    </div>
    <div class="mainBar_item">
      <div class="iconfont icon-cart"></div>
      <div class="mainBar_item_title">购物车</div>
    </div>
    <div class="mainBar_item">
      <div class="iconfont icon-orders"></div>
      <div class="mainBar_item_title">订单</div>
    </div>
    <div class="mainBar_item">
      <div class="iconfont icon-my"></div>
      <div class="mainBar_item_title">我的</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#mainBar {
  display: flex;

  position: absolute;

  left: 0;
  bottom: 0;

  width: 100%;
  height: 0.49rem;

  border-top: 1px solid #f6f6f6;
}

.mainBar_item {
  flex: 1;

  text-align: center;
}
.mainBar_item .iconfont {
  font-size: .18rem;

  margin: 0.07rem 0 0.02rem 0;
}
.mainBar_item_title{
  font-size: .2rem;

  transform: scale(.5,.5);
  transform-origin: center top;
}
</style>