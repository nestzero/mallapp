<template>
  <div id="mainBar">
    <div
      class="mainBar_item"
      v-for="(item, index) in nav"
      :key="index"
      :class="{ actived: index == currentIndex }"
      @click="toNewPath(item.path, index)"
    >
      <div :class="'iconfont ' + item.iconfont"></div>
      <div class="mainBar_item_title">{{ item.name }}</div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import router from "@/router/index.js";

const userNavEffect = () => {
  const state = reactive({
    nav: [
      { path: "/home", iconfont: "icon-home", name: "首页" },
      { path: "/", iconfont: "icon-cart", name: "购物车" },
      { path: "/orderlist", iconfont: "icon-orders", name: "订单" },
      { path: "/my", iconfont: "icon-my", name: "我的" },
    ],
  });

  const toNewPath = (path, index) => {
    currentIndex = index;

    router.push({ path: path });
  };

  return { state, toNewPath };
};

export default {
  props:['currentIndex'],
  name: "MainBar",
  setup(props) {
    const { state, toNewPath } = userNavEffect();

    const {currentIndex}=props;

    return {
      currentIndex,
      ...toRefs(state),
      toNewPath,
    };
  },
};
</script>

<style lang="scss" scoped>
#mainBar {
  display: flex;

  position: absolute;

  left: 0;
  bottom: 0;

  width: 100%;
  height: 0.49rem;

  border-top: 0.01rem solid #f6f6f6;

  z-index: 999;
}

.mainBar_item {
  flex: 1;

  text-align: center;

  .iconfont {
    font-size: 0.18rem;

    margin: 0.07rem 0 0.02rem 0;
  }

  &_title {
    font-size: 0.2rem;

    transform: scale(0.5, 0.5);
    transform-origin: center top;
  }
}

.actived {
  color: #1fa4fc;
}
</style>