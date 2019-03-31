<template>
  <div class="wh-tooltip-header">
    <div class="background"></div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wh-tooltip-header {
  z-index: 5;
}

.background {
  $slice: 72;
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 39px;
  border-image-slice: 0 $slice 0 $slice fill;
  border-image-width: 0px #{$slice}px 0px #{$slice}px;
  border-image-repeat: repeat;
  border-image-source: url("~@/assets/skins/default/tooltip_header.png");
  z-index: 1;
  opacity: 0.8;
}

.content {
  height: 39px;
  max-height: 39px;
  padding: 0 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  z-index: 10;
}
</style>
