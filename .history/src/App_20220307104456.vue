<template>
  <div class="docker"></div>
</template>

<script>
import MainBar from "@/components/content/MainBar/MainBar";
export default {
  components"{
    MainBar
  }
}
</script>

<style lang="scss">
.docker {
  position: absolute;

  left: 0;
  bottom: 0;

  width: 100%;
  height: 0.49rem;

  border-top: 1px solid #f1f1f1;

  background-color: green;
}
</style>
