<template>
  <div id="home">
    <div class="wrapper">
      
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;

  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;

  width: 100%;
  height: 0.49rem;

  border-bottom: 0.01rem solid #f6f6f6;

  padding: 0 0.18rem;
}
.position {
  position: relative;

  height: 22px;

  line-height: 22px;
  color: #333333;
  font-size: 16px;
  font-family: "PingFangSC-Regular";

  padding: .16rem .24rem .16rem 0;

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