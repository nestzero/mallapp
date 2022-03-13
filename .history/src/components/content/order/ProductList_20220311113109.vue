<template>
  <div id="product-list">
    <div class="products_title">
    {{shopName}}
  </div>
  <div class="products_wrapper">
    <div class="products_list">
      <div
        v-for="item in productList"
        :key="item._id"
        class="products_item"
      >
        <img class="products_item_img" :src="item.imgUrl" />
        <div class="products_item_detail">
          <h4 class="products_item_title">{{item.name}}</h4>
          <p class="products_item_price">
            <span>
              <span class="products_item_yen">&yen; </span>
              {{item.price}} x {{item.count}}
            </span>
            <span class="products_item_total">
              <span class="products_item_yen">&yen; </span>
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