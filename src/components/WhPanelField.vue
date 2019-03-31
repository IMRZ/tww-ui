<template>
  <div class="wh-panel-field">
    <div class="icon-wrapper">
      <WhIcon class="icon" :icon="icon" />
    </div>
    <label class="label">{{label}}</label>
    <div class="slot-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import WhIcon from "@/components/WhIcon";

export default {
  components: {
    WhIcon
  },
  props: {
    icon: String,
    label: String
  }
};
</script>

<style lang="scss" scoped>
.wh-panel-field {
  display: flex;
  flex-direction: row;
  height: 30px;
  font-size: 0.9em;
  align-items: center;

  .icon-wrapper {
    display: flex;
    width: 52px;
    height: 29px;
    background-image: url("~@/assets/skins/default/spacebar_bookmark.png");
    align-items: center;

    .icon {
      margin-top: -2px;
      margin-left: 8px;
      max-width: 30px;
      max-height: 30px;
    }
  }

  .label {
    flex: 1;
  }

  .slot-wrapper {
    margin-right: 12px;
  }
}
</style>
