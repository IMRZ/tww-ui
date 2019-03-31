<template>
  <div class="wh-button-frame">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.wh-button-frame {
  display: inline-block;
  margin: 0;

  $slice: 48;
  border-image-slice: $slice $slice $slice $slice fill;
  border-image-width: #{$slice}px #{$slice}px #{$slice}px #{$slice}px;
  border-image-repeat: repeat;
  border-image-source: url("~@/assets/skins/default/faction_button_frame.png");
}
</style>
