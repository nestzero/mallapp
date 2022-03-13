<template>
  <div id="app">
    <router-view/>

    <main-bar></main-bar>
  </div>

</template>

<script>
import MainBar from "@/components/common/MainBar/MainBar";
export default {
  components:{
    MainBar,
  },
  setup(){
    localStorage.
    localStorage.navIndex=0;
  }
}
</script>

<style lang="scss" scoped>
</style>
