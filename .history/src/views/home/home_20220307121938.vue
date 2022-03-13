<template>
  <div id="home">
    <div class="wrapper">
      <div class="position">
        <i class="iconfont icon-weibiaoti-3"></i>
        <span class="position_name">北京理工大学国防科技园2号楼10层</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.wrapper{
  display: flex;

  position: absolute;

  left:0;
  top:0;
  bottom: .5rem;
  right: 0;

  width: 100%;
  height: .49rem;

  border-bottom: .01rem solid #f6f6f6;

  padding: 0 .18rem;
}
.position{
  height: 22px;

  padding: .16rem 0;

  &_name{
    line-height: 22px;
    color:#333333;
    font-size: 16px;
    font-family: 'PingFangSC-Regular';
  }
}

</style>