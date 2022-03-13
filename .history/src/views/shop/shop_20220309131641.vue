<template>
  <shop-info :item="router.currentRoute.value.item"></shop-info>
</template>

<script>
import ShopInfo from '@/components/common/ShopInfo/ShopInfo'
import router from ''

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