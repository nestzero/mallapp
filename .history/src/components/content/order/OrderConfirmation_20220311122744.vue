<template>
  <div id="order-confirmation">
    <div class="order_confirmation">
      <div class="order_confirmation_price">实付金额 <b>¥{{calculations.price}}</b></div>
    <div class="order_confirmation_btn" @click="() => handleShowConfirmChange(true)">提交订单</div>
    </div>
  </div>
</template>

<script>
import {useCommonCartEffect} from '@/effects/commonCartEffect';

export default {
  setup() {
    const {calculations} =useCommonCartEffect();

    return{
      
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/viriables.scss";

.order_confirmation {
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