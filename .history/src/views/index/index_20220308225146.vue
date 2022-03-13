<template>
  <div id="index">

    <div v-if="router.path =='/home'">

    </div>

    <main-bar></main-bar>
  </div>
</template>

<script>
import MainBar from "@/components/common/MainBar/MainBar";
import router from "@/router/index.js";
import 


export default {
  setup() {

  },
  components: {
    MainBar,
  },
};
</script>

<style lang='scss' scoped>
</style>