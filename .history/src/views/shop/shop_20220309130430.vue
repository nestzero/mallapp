<template>
  <shop-info :item="$route"></shop-info>
</template>

<script>
import ShopInfo from '@/components/common/ShopInfo/ShopInfo'

export default {
  components:{
    ShopInfo
  },
  setup() {
    
  },
}
</script>

<style lang="scss" scoped>

</style>