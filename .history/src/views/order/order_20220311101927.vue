<template>
  <div id="order">
    
    <order-confirmation></order-confirmation>
  </div>
</template>

<script>
import OrderConfirmation from '@/components/content/order/OrderConfirmation'

export default {
  components:{
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