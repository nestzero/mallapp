<template>
  <div id="index">

    <div v-if="router.path =='/home'">
      <home></home>
    </div>

    <div v-else>
      <my></my>
    </div>

    <main-bar></main-bar>
  </div>
</template>

<script>
import MainBar from "@/components/common/MainBar/MainBar";
import router from "@/router/index.js";

import home from './home/home';
import cart from './cart';
import my from './my/my';


export default {
  setup() {

  },
  components: {
    MainBar,
    home,
    my
  },
};
</script>

<style lang='scss' scoped>
</style>