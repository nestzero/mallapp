<template>
  <div id="order-confirmation">
    <div class="order-confirmation"></div>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/viriables.scss";

.order {
  display: flex;

  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  

  height: 0.49rem;
  line-height: 0.49rem;
  background: $bgColor;
}
</style>