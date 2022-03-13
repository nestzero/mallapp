<template>
  <div id="cart">
    <div class="check">
      <div class="check_icon">
        <img
          src="http://www.dell-lee.com/imgs/vue3/basket.png"
          class="check__icon__img"
        />
        <div class="check_icon_tag">{{ total }}</div>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/viriables.scss";

#cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  .check{
    
  }
}
</style>