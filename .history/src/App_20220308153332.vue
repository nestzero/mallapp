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
    
  }
}
</script>

<style lang="scss" scoped>
</style>
