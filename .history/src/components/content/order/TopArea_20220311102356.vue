<template>
  <div id="top-area">
    <div class="top">

    </div>
  </div>
</template>

<script>
export default {
  setup() {
    
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/viriables.scss";

#top-area{
  position: relative;
  height: 1.96rem;

  background-size: 100% 1.59rem;
  background-image: linear-gradient(0deg, rgba(0,145,255,0.00) 4%, #0091FF 50%);
  background-repeat: no-repeat;

  .top{
    &_header {
    position: relative;
    padding-top: .26rem;
    line-height: .24rem;
    color: $bgColor;
    text-align: center;
    font-size: .16rem;
    
    &_back {
      position: absolute;
      left: .18rem;
      font-size: .22rem;
    }
  }
  }
}
</style>