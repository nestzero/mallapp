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
  setup() {

  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/viriables.scss";
@import "@/assets/css/mixins.scss";

.products {
  margin: 0.16rem 0.18rem 0.1rem 0.18rem;
  background: $bgColor;

  &_title {
    padding: 0.16rem;
    font-size: 0.16rem;
    color: $content-fontcolor;
  }

  &_wrapper {
    overflow-y: scroll;
    margin: 0 0.18rem;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0.6rem;
    top: 2.6rem;
  }

  &_list {
    background: $bgColor;
  }

  &_item {
    position: relative;
    display: flex;
    padding: 0 0.16rem 0.16rem 0.16rem;

    &_img {
      width: 0.46rem;
      height: 0.46rem;
      margin-right: 0.16rem;
    }

    &_detail {
      flex: 1;
    }

    &_title {
      margin: 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $content-fontcolor;
      @include ellipsis;
    }

    &_price {
      display: flex;
      margin: 0.06rem 0 0 0;
      line-height: 0.2rem;
      font-size: 0.14rem;
      color: $hightlight-fontColor;
    }

    &_total {
      flex: 1;
      text-align: right;
      color: $dark-fontColor;
    }

    &_yen {
      font-size: 0.12rem;
    }
  }
}
</style>