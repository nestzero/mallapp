<template>
  <div id="content">
    <div class="categories">
        <div class="categories_item" 
        v-for="(item,index) in categories" 
        :key="index"
        :class="{'actived': currentTab===index}"
        >
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

const useCurrentTab

export default {
  setup() {
    return {categories}
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/viriables.scss';
@import '@/assets/css/mixins.scss';

#content{
  display: flex;
  position: absolute;

  left:0;
  right:0;

  top: 1.5rem;
  bottom: .5rem;
}

.categories{
  overflow-y: scroll;
  height: 100%;
  width: .76rem;
  background-color: $search-bgColor;

  &_item{
    line-height: .4rem;
    text-align: center;
    font-size: 14px;
    color: #333;
  }

  .actived {
    background: $bgColor;
  }
}
</style>