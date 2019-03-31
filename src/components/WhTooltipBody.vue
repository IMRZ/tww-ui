<template>
  <div class="wh-tooltip-body">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.wh-tooltip-body {
  padding: 12px;
}

.wh-tooltip-header + .wh-tooltip-body {
  padding: 0 12px 2px 12px;
}
</style>
