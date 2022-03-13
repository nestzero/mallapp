<template>
  <div id="home">
    <div class="wrapper">
      <div class="position">
        <i class="iconfont icon-weibiaoti-3"></i>
        <span class="position_name">北京理工大学国防科技园2号楼10层</span>
        <i class="iconfont icon-bell position_remind"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;

  position: absolute;

  left: 0;
  top: 0;
  bottom: .5rem;
  right: 0;

  width: 100%;
  height: 0.49rem;

  border-bottom: .01rem solid #f6f6f6;

  padding: 0 .18rem;
}
.position {
  position: relative;

  height: 22px;

  line-height: 22px;
  color: #333333;
  font-size: 16px;
  font-family: "PingFangSC-Regular";

  padding: .16rem 0;

  &_name {
    margin-left: 8px;
  }

  i {
    font-size: 20px;
    line-height: 20px;
  }

  .position_remind{
    position: absolute;

    top:.1rem;

    margin-left: 39px;
  }
}
</style>