<template>
  <div class="wh-tooltip">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.wh-tooltip {
  position: relative;

  $slice: 18;
  border-image-slice: $slice $slice $slice $slice fill;
  border-image-width: #{$slice}px #{$slice}px #{$slice}px #{$slice}px;
  border-image-repeat: repeat;
  border-image-source: url("~@/assets/skins/default/tooltip_frame.png");

  z-index: 0;
  color: #fff8d7;
}
</style>
