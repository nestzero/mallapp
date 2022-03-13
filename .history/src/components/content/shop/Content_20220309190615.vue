<template>
  <div id="content">
    <div class="categories">
        <div class="categories_item" v-for="(item,index) in categories" :key="index">
          {{item.name}}
        </div>
    </div>

    <div class="product">

    </div>

  </div>
</template>

<script>
const categories = [
  { name: '全部商品', tab: 'all' },
  { name:'秒杀', tab: 'seckill' },
  { name: '新鲜水果', tab: 'fruit'}
]

export default {
  setup() {
    return {categories}
  },
}
</script>

<style lang="scss" scoped>
#content{
  display: flex;
  position: absolute;

  left:0;
  right:0;

  top: 1.5rem;
  bottom: .5rem;
}


</style>