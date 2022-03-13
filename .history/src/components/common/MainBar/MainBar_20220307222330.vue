<template>
  <div id="mainBar">
    <div class="mainBar_item actived">
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
    <div class="mainBar_item" @click="toLogin">
      <div class="iconfont icon-my"></div>
      <div class="mainBar_item_title">我的</div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      navIndex:0,
    }
  },
  methods:{
    toLogin(){
      this.$router.push('/login');
    }
  }
};
</script>

<style lang="scss" scoped>
#mainBar {
  display: flex;

  position: absolute;

  left: 0;
  bottom: 0;

  width: 100%;
  height: .49rem;

  border-top: .01rem solid #f6f6f6;

  z-index:999;
}

.mainBar_item {
  flex: 1;

  text-align: center;

  .iconfont {
    font-size: .18rem;

    margin: .07rem 0 .02rem 0;
  }

  &_title {
    font-size: .2rem;

    transform: scale(0.5, 0.5);
    transform-origin: center top;
  }
}

.actived {
  color: #1fa4fc;
}
</style>