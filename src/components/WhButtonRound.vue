<template>
  <div class="wh-button-round" @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    icon: String,
    onClick: Function
  }
};
</script>

<style lang="scss" scoped>
$button-underlay: url("~@/assets/sprites/button_round.png") (-56px * 0);
$button-hover: url("~@/assets/sprites/button_round.png") (-56px * 1);
$button-pressed: url("~@/assets/sprites/button_round.png") (-56px * 2);

.wh-button-round {
  cursor: pointer;
  width: 56px;
  height: 56px;
  background: $button-underlay;

  &:hover {
    background: $button-hover;
  }

  &:active {
    background: $button-pressed;
  }
}
</style>
