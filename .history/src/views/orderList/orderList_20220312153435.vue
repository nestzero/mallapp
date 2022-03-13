<template></template>

<script>
import { reactive, toRefs } from 'vue'

// 处理订单列表逻辑
const useOrderListEffect = () => {

  const data = reactive({ list:[]})
  const getNearbyList = async () => {
    const result = await get('/api/order')
    if (result?.errno === 0 && result?.data?.length) {
      const orderList = result.data
      orderList.forEach((order) => {
        const products = order.products || []
        let totalPrice = 0
        let totalNumber = 0
        products.forEach((productItem) => {
          totalNumber += (productItem?.orderSales || 0)
          totalPrice += ((productItem?.product?.price * productItem?.orderSales) || 0)
        })
        order.totalPrice = totalPrice
        order.totalNumber = totalNumber
      })
      data.list = result.data
    }
  }
  getNearbyList()
  const { list } = toRefs(data)
  return { list }
}
export default {

  setup() {
    const { list } = useOrderListEffect()
    return { list }
  },
}
</script>

<style lang="scss" scoped>
</style>