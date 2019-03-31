<template>
  <div class="wh-panel">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wh-panel {
  padding: 8px 8px;
  color: #fff8d7;

  $slice: 60;
  border-image-slice: $slice $slice $slice $slice fill;
  border-image-width: #{$slice}px #{$slice}px #{$slice}px #{$slice}px;
  border-image-repeat: repeat;
  border-image-source: url("~@/assets/skins/default/panel_back_border.png");

  background-image: url("~@/assets/skins/default/panel_back_tile.png");
  background-clip: content-box;
}

.content {
  padding: 5px 0;
}
</style>
