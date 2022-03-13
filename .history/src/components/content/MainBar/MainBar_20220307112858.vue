<template>
  <div id="mainBar">
    <span class="mainBar_item"> 
      <div class="iconfont icon-home"></div>
      首页
    </span>
    <span class="mainBar_item">
      <div class="iconfont icon-orders"></div>
      购物车
    </span>
    <span class="mainBar_item">订单</span>
    <span class="mainBar_item">我的</span>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
#mainBar{
  display: flex;

  position: absolute;

  left: 0;
  bottom: 0;

  width: 100%;
  height: .49rem;

  border-top: 1px solid #f1f1f1;

  background-color: green;

}

.mainBar_item{
  flex:1;

  text-align: center;
}
</style>