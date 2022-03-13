<template></template>

<script>
import { reactive, toRefs } from "vue";
import { getOrderList } from "@/apis/order";

// 处理订单列表逻辑
const useOrderListEffect = () => {
  const data = reactive({ list: [] });

  const getNearbyList = async () => {
    const result = await getOrderList("/api/order");

    if (result?.errno === 0 && result?.data?.length) {
      const orderList = result.data;

      orderList.forEach((order) => {
        const products = order.products || [];
        let totalPrice = 0;
        let totalNumber = 0;
        products.forEach((productItem) => {
          totalNumber += productItem?.orderSales || 0;
          totalPrice +=
            productItem?.product?.price * productItem?.orderSales || 0;
        });
        order.totalPrice = totalPrice;
        order.totalNumber = totalNumber;
      });

      data.list = result.data;
    }
  };

  getNearbyList();

  const { list } = toRefs(data);

  return { list };
};
export default {
  setup() {
    const { list } = useOrderListEffect();
    return { list };
  },
};
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: .5rem;
  right: 0;
  background: rgb(248, 248,248);
}
.title {
  line-height: .44rem;
  background: $bgColor;
  font-size: .16rem;
  color: $content-fontcolor;
  text-align: center;
}
.order {
  margin: .16rem .18rem;
  padding: .16rem;
  background: $bgColor;
  &__title {
    margin-bottom: .16rem;
    line-height: .22rem;
    font-size: .16rem;
    color: $content-fontcolor;
  }
  &__status {
    float: right;
    font-size: .14rem;
    color: $light-fontColor;
  }
  &__content {
    display: flex;
    &__imgs {
      flex: 1;
    }
    &__img {
      width: .4rem;
      height: .4rem;
      margin-right: .12rem;
    }
    &__info {
      width: .7rem;
    }
    &__price {
      margin-bottom: .04rem;
      line-height: .2rem;
      font-size: .14rem;
      color: $hightlight-fontColor;
      text-align: right;
    }
    &__count {
      line-height: .14rem;
      font-size: .12rem;
      color: $content-fontcolor;
      text-align: right;
    }
  }
}
</style>