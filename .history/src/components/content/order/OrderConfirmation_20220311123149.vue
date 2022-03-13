<template>
  <div id="order-confirmation">
    <div class="order_confirmation">
      <div class="order_confirmation_price">实付金额 <b>¥{{calculations.price}}</b></div>
    <div class="order_confirmation_btn" @click="() => handleShowConfirmChange(true)">提交订单</div>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
import {useRoute} from 'vue-router'

import {useCommonCartEffect} from '@/effects/commonCartEffect';

// 阴影层展示相关的逻辑
const useShowMaskEffect = () => {
  const showConfirm = ref(false)
  const handleShowConfirmChange = (status) => {
    showConfirm.value = status
  }
  return { showConfirm, handleShowConfirmChange }
}

export default {
  setup() {
    const route=useRoute();
    const shopId=route.params.id;

    const {calculations} =useCommonCartEffect(shopId);

    const { showConfirm, handleShowConfirmChange }=useShowMaskEffect();

    return{
      calculations,
      showConfirm, handleShowConfirmChange
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

  &_price {
    flex: 1;
    text-indent: .24rem;
    font-size: .14rem;
    color: $content-fontcolor;
  }

  &_btn {
    width: .98rem;
    background: #4FB0F9;
    color: #fff;
    text-align: center;
    font-size: .14rem;
  }
}
</style>