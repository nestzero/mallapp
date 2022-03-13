<template>
  <div id="order">
    <top-area></top-area>
    <order-confirmation></order-confirmation>
  </div>
</template>

<script>
import TopArea from '@/components/content/order/TopArea'
import OrderConfirmation from '@/components/content/order/OrderConfirmation'

export default {
  components:{
    TopArea,
    OrderConfirmation
  },
  setup() {
    
  },
}
</script>

<style lang="scss" scoped>
.order {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #eee;
  overflow-y: scroll;
}
</style>