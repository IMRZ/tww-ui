<template>
  <div class="wh-checkbox">
    <input type="checkbox" :checked="value">
    <span @click="toggle"></span>
  </div>
</template>

<script>
export default {
  props: {
    value: Boolean
  },
  methods: {
    toggle() {
      this.$emit("input", !this.value);
    }
  }
};
</script>

<style lang="scss" scoped>
$checkbox-active: url("~@/assets/sprites/checkbox.png") (-34px * 0);
$checkbox-hover: url("~@/assets/sprites/checkbox.png") (-34px * 1);
$checkbox-checked: url("~@/assets/sprites/checkbox.png") (-34px * 2);
$checkbox-checked-hover: url("~@/assets/sprites/checkbox.png") (-34px * 3);

.wh-checkbox > input {
  display: none;
}

.wh-checkbox {
  display: inline-block;
  width: 34px;
  height: 33px;

  input[type="checkbox"] + span {
    display: inline-block;
    width: 34px;
    height: 32px;
    cursor: pointer;
    background: $checkbox-active;

    &:hover {
      background: $checkbox-hover;
    }
  }

  input[type="checkbox"]:checked + span {
    background: $checkbox-checked;

    &:hover {
      background: $checkbox-checked-hover;
    }
  }
}
</style>
