<template>
  <div id="home">
    <div class="wrapper">
      <static-parts></static-parts>

      <nearby-parts></nearby-parts>
    </div>
  </div>
</template>

<script>
import StaticParts from '@/components/content/home/childComponents/StaticParts';
import NearbyParts from './childComponents/NearbyParts';

export default {
  components:{
    StaticParts,
    NearbyParts
  }
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