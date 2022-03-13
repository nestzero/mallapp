<template>
  <div id="app">
    <router-view v-if="isRouterAlive" :key="this.$route.query.id"/>

    <main-bar></main-bar>
  </div>

</template>

<script>
import MainBar from "@/components/content/MainBar/MainBar";
export default {
  components:{
    MainBar,
  }
}
</script>

<style lang="scss" scoped>
</style>
