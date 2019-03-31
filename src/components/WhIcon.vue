<template>
  <span class="wh-icon" :class="icon"></span>
</template>

<script>
export default {
  props: {
    icon: String
  }
};
</script>

<style lang="scss" scoped>
.wh-icon {
  display: inline-block;
}

@import "~@/scss/climate-icons";
@import "~@/scss/flag-icons";
@import "~@/scss/resource-icons";
@import "~@/scss/skins-icons";

.xs {
  width: 24px;
  height: 24px;
}

.sm {
  width: 26px;
  height: 26px;
}

.md {
  width: 30px;
  height: 30px;
}

.lg {
  width: 38px;
  height: 38px;
}

.xl {
  width: 55px;
  height: 55px;
}
</style>
