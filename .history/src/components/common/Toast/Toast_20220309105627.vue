<template></template>

<script>
export default {
  setup() {},
};
</script>

<style lang="scss" scoped>
@import "../style/viriables.scss";
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 0.1rem;
  background: rgba(0, 0, 0, 0.35);
  border-radius: 0.05rem;
  color: $bgColor;
}
</style>