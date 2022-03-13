<template>
  <div class="nearby_content">
    <div class="nearby_content_title">{{ item.name }}</div>
    <div class="nearby_content_tags">
      <span class="nearby_content_tag">{{ item.sales }}</span>
      <span class="nearby_content_tag">{{ item.expressLimit }}</span>
      <span class="nearby_content_tag">{{ item.expressPrice }}</span>
    </div>
    <p class="nearby_content_highlight">{{ item.slogan }}</p>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style lang="scss" scoped>
</style>