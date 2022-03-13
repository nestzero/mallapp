<template>
  <div id="static-parts">
    <div class="position">
      <i class="iconfont icon-weibiaoti-3"></i>
      <span class="position_name">北京理工大学国防科技园2号楼10层</span>
      <i class="iconfont icon-bell position_remind"></i>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.position {
  position: relative;

  height: 22px;

  line-height: 22px;
  color: #333333;
  font-size: 16px;
  font-family: "PingFangSC-Regular";

  padding: 0.16rem 0.24rem 0.16rem 0;

  &_name {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    margin-left: 8px;
  }

  i {
    font-size: 20px;
    line-height: 20px;
  }

  .position_remind {
    position: absolute;

    top: 0.17rem;

    margin-left: 39px;
  }
}
</style>