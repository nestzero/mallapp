<template>
  <shop-info :item="item"></shop-info>
</template>

<script>
import ShopInfo from '@/components/common/ShopInfo/ShopInfo'
import import {useRouter } from 'vue-router'
import { onMounted } from '@vue/runtime-core'

export default {
  components:{
    ShopInfo
  },
  setup() {
    const item=route.currentRoute.value.params

    return {item}
  },
}
</script>

<style lang="scss" scoped>

</style>