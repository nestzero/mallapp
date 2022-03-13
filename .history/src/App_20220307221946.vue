<template>
  <div id="app">
    <router-view/>

    <main-bar></main-bar>
  </div>

</template>

<script>
import MainBar from "@/components/conmmon/MainBar/MainBar";
export default {
  components:{
    MainBar,
  }
}
</script>

<style lang="scss" scoped>
</style>
