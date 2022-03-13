<template>
  <shop-info :item="route.params.item"></shop-info>
</template>

<script>
import ShopInfo from '@/components/common/ShopInfo/ShopInfo'
import router from '@/router/index.js'
import { onMounted } from '@vue/runtime-core'

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