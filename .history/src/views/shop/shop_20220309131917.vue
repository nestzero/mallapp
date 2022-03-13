<template>
  <shop-info :item="{}"></shop-info>
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
    onMounted:{
      console.log(router.currentRoute.value.params.);
    }
  },
}
</script>

<style lang="scss" scoped>

</style>