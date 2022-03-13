<template>
  <div id="nearby_parts">
    <div class="nearby_title">附近店铺</div>

    <div 
    class="nearby_item"
    v-for="(item,index) in "
    >

    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '@/assets/css/viriables.scss';

.nearby_title {
  width: 0.72rem;
  height: 0.25rem;

  line-height: 0.25rem;
  color: $content-fontcolor;
  font-size: 0.18rem;
  font-family: "PingFangSC-Medium";
  font-weight: normal;

  margin: 0.16rem 0 0.02rem 0;
}
</style>