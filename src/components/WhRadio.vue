<template>
  <div class="wh-radio">
    <input type="radio" :value="value" :checked="value === modelValue">
    <span @click="$emit('change', value)"></span>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
    value: String
  },
  model: {
    prop: "modelValue",
    event: "change"
  }
};
</script>

<style lang="scss" scoped>
$radio-active: url("~@/assets/sprites/button_radio.png") (-26px * 0);
$radio-hover: url("~@/assets/sprites/button_radio.png") (-26px * 1);
$radio-checked: url("~@/assets/sprites/button_radio.png") (-26px * 2);
$radio-checked-hover: url("~@/assets/sprites/button_radio.png") (-26px * 3);

.wh-radio > input {
  display: none;
}

.wh-radio {
  display: inline-block;
  width: 28px;
  height: 30px;

  input[type="radio"] + span {
    display: inline-block;
    margin-left: 2px;
    margin-top: 3px;
    width: 26px;
    height: 27px;
    cursor: pointer;
    background: $radio-active;

    &:hover {
      background: $radio-hover;
    }
  }

  input[type="radio"]:checked + span {
    background: $radio-checked;

    &:hover {
      background: $radio-checked-hover;
    }
  }
}
</style>
