<template>
  <div id="static-parts">
    <div class="position">
      <i class="iconfont icon-weibiaoti-3"></i>
      <span class="position_name">北京理工大学国防科技园2号楼10层</span>
      <i class="iconfont icon-bell position_remind"></i>
    </div>

    <div class="search">
      <i class="iconfont icon-search"></i>
      <span class="search_text">山姆会员店优惠商品</span>
    </div>

    <div class="banner">
      <img
        class="banner__img"
        src="http://www.dell-lee.com/imgs/vue3/banner.jpg"
      />
    </div>

    <div class="icons">
      <div class="icons_item" v-for="item in iconsList" :key="item.desc">
        <img
          class="icons_item_img"
          :src="`http://www.dell-lee.com/imgs/vue3/${item.imgName}.png`"
        />
        <p class="icons_item_desc">{{ item.desc }}</p>
      </div>
    </div>

    <div class="gap"></div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";

const useIconsListEffect = () => {
  const  d= reactive({iconsList:[
    { imgName: "超市", desc: "超市便利" },
    { imgName: "菜市场", desc: "菜市场" },
    { imgName: "水果店", desc: "水果店" },
    { imgName: "鲜花", desc: "鲜花绿植" },
    { imgName: "医药健康", desc: "医药健康" },
    { imgName: "家居", desc: "家居时尚" },
    { imgName: "蛋糕", desc: "烘培蛋糕" },
    { imgName: "签到", desc: "签到" },
    { imgName: "大牌免运", desc: "大牌免运" },
    { imgName: "红包", desc: "红包套餐" },
  ]});

  

  return { iconsList };
};
export default {
  setup() {
    const { iconsList } = useIconsListEffect;


    return { iconsList };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/viriables.scss";
@import "@/assets/css/mixins.scss";

#static-parts {
}

.position {
  position: relative;

  height: 22px;

  line-height: 22px;
  color: #333333;
  font-size: 16px;
  font-family: "PingFangSC-Regular";

  padding: 0.16rem 0.24rem 0.16rem 0;

  &_name {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    margin-left: 8px;
  }

  i {
    font-size: 20px;
    line-height: 20px;
  }

  .position_remind {
    position: absolute;

    top: 0.16rem;

    margin-left: 39px;
  }
}

.search {
  width: 3.07rem;
  height: 0.32rem;

  line-height: 0.32rem;
  border-radius: 0.16rem;
  background-color: #f5f5f5;

  padding: 0 0.16rem;

  .search_text,
  i {
    height: 0.16rem;

    line-height: 0.16rem;
    color: #b7b7b7;
    font-size: 0.14rem;
    font-family: "PingFangSC-Regular";
  }

  i {
    font-size: 0.16rem;

    margin-right: 0.06rem;
  }
}

.banner {
  overflow: hidden;

  padding: 0.12rem 0;

  img {
    width: 3.39rem;
    height: 0.86rem;
  }
}

.icons {
  display: flex;

  width: 3.39rem;

  flex-wrap: wrap;
  margin-top: 0.16rem;

  &_item {
    width: 20%;

    img {
      display: block;
      width: 0.4rem;
      height: 0.4rem;
      margin: 0 auto;
    }

    &_desc {
      margin: 0.06rem 0 0.16rem 0;
      text-align: center;
      color: $content-fontcolor;
    }
  }
}

.gap {
  height: 0.1rem;

  margin: 0 -0.18rem;

  background: $content-bgColor;
}
</style>