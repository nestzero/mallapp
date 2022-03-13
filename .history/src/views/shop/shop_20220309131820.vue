<template>
  <shop-info :item="router.currentRoute.params"></shop-info>
</template>

<script>
import ShopInfo from '@/components/common/ShopInfo/ShopInfo'
import router from '@/router/index.js'

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