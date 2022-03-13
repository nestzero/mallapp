<template>
  <shop-info :item="{}"></shop-info>
</template>

<script>
import ShopInfo from '@/components/common/ShopInfo/ShopInfo'
import route from '@/route/index.js'
import { onMounted } from '@vue/runtime-core'

export default {
  components:{
    ShopInfo
  },
  setup() {
    const item=useRoute().params.item

    console.log(item);
  },
}
</script>

<style lang="scss" scoped>

</style>