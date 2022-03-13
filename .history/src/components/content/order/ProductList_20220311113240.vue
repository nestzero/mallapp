<template>
  <div id="product-list">

    <div class="products">
      <div class="products_title">
        {{ shopName }}
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
              <h4 class="products_item_title">{{ item.name }}</h4>
              <p class="products_item_price">
                <span>
                  <span class="products_item_yen">&yen; </span>
                  {{ item.price }} x {{ item.count }}
                </span>
                <span class="products_item_total">
                  <span class="products_item_yen">&yen; </span>
                  {{ (item.price * item.count).toFixed(2) }}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/viriables.scss";

.products {
  margin: 0.16rem 0.18rem 0.1rem 0.18rem;
  background: $bgColor;

  &__title {
    padding: .16rem;
    font-size: .16rem;
    color: $content-fontcolor;
  }
  &__wrapper {
    overflow-y: scroll;
    margin: 0 .18rem;
    position: absolute;
    left: 0;
    right: 0;
    bottom: .6rem;
    top: 2.6rem;
  }
  &__list {
    background: $bgColor;
  }
  &__item {
    position: relative;
    display: flex;
    padding: 0 .16rem 0.16rem .16rem;
    &__img {
      width: .46rem;
      height: .46rem;
      margin-right: .16rem;
    }
    &__detail {
      flex: 1;
    }
    &__title {
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $content-fontcolor;
      @include ellipsis;
    }
    &__price {
      display: flex;
      margin: .06rem 0 0 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $hightlight-fontColor;
    }
    &__total {
      flex: 1;
      text-align: right;
      color: $dark-fontColor;
    }
    &__yen {
      font-size: .12rem;
    }
}
</style>