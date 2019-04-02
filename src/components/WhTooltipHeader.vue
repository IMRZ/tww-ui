<template>
  <div class="wh-tooltip-header">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wh-tooltip-header {
  $slice: 72;
  height: 39px;
  border-image-slice: 0 $slice 0 $slice fill;
  border-image-width: 0px #{$slice}px 0px #{$slice}px;
  border-image-repeat: repeat;
  border-image-source: url("~@/assets/skins/default/tooltip_header.png");
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
}
</style>
