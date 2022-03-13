<template>
  <div id="home">
    <div class="wrapper">
      <static-parts></static-parts>

      <nearby-parts></nearby-parts>
    </div>
  </div>
</template>

<script>
import StaticParts from "@/components/content/home/StaticParts";
import NearbyParts from "@/components/content/home/NearbyParts";
import { onMounted } from '@vue/runtime-core';
import router from '@/router/index.js'

export default {
  setup() {
    components: {
      StaticParts, NearbyParts;
    }

    onMounted:{
      console.log(router.currentRoute.value.params.);
    }
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;

  left: 0;
  top: 0;
  bottom: 0.5rem;
  right: 0;

  width: 100%;
  height: 0.49rem;

  padding: 0 0.18rem;
}
</style>