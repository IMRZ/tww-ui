<template>
  <div class="bar-top">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.bar-top {
  box-sizing: border-box;
  max-height: 68px;
  height: 68px;

  $slice: 150;
  border-image-slice: 0 $slice 0 $slice fill;
  border-image-width: 0 #{$slice}px 0 #{$slice}px;
  border-image-repeat: repeat;
  border-image-source: url("~@/assets/skins/default/bar_top_center_tactical_map.png");

  background-clip: content-box;
  padding: 9px 150px 28px 150px;

  overflow: hidden;
}
</style>
