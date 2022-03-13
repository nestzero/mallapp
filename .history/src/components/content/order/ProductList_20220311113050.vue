<template>
  <div id="product-list">
    <div class="products__title">
    {{shopName}}
  </div>
  <div class="products__wrapper">
    <div class="products__list">
      <div
        v-for="item in productList"
        :key="item._id"
        class="products__item"
      >
        <img class="products__item__img" :src="item.imgUrl" />
        <div class="products__item__detail">
          <h4 class="products__item__title">{{item.name}}</h4>
          <p class="products__item__price">
            <span>
              <span class="products__item__yen">&yen; </span>
              {{item.price}} x {{item.count}}
            </span>
            <span class="products__item__total">
              <span class="products__item__yen">&yen; </span>
              {{(item.price * item.count).toFixed(2)}}
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  setup() {
    
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/viriables.scss";

.product_list{
  margin: .16rem .18rem .1rem .18rem;
  background: $bgColor;
}
</style>