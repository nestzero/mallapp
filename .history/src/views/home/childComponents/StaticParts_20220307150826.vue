<template>
  <div id="static-parts">
    <div class="position">
      <i class="iconfont icon-weibiaoti-3"></i>
      <span class="position_name">北京理工大学国防科技园2号楼10层</span>
      <i class="iconfont icon-bell position_remind"></i>
    </div>

    <div class="search">
      <i class="iconfont icon-search"></i>
      <span class="search_text">山姆会员店优惠商品</span>
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

.search{
  width: 100%;
  height: 32px;

  line-height: 32px;
  border-radius: .16rem;
  background-color: #F5F5F5;

  padding: 0 .16rem;

  .search_text,i{
    height: 16px;

    line-height: 16px;
    color:#B7B7B7;
    font-size: 14px;
    font-family: 'PingFangSC-Regular';
  }

  i{
    font-size: 16px;
  }
}
</style>