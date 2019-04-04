<template>
  <WhBarTop class="bar">
    <div class="filters">
      <span>Filters:</span>
      <div class="filter">
        <WhIcon icon="xs default icon_marker_settlement" />
        <WhCheckbox v-model="checked1" />
      </div>
      <div class="filter">
        <WhIcon icon="xs default icon_marker_trade" />
        <WhCheckbox v-model="checked2" />
      </div>
    </div>
  </WhBarTop>
</template>

<script>
import WhBarTop from "@/components/WhBarTop";
import WhIcon from "@/components/WhIcon";
import WhCheckbox from "@/components/WhCheckbox";

export default {
  components: {
    WhBarTop,
    WhIcon,
    WhCheckbox
  },
  data() {
    return {
      checked1: false,
      checked2: false,
    };
  }
};
</script>


<style lang="scss" scoped>
.bar {
  color: white;
  display: inline-block;

  .filters {
    margin: 0 10px 0 20px;
    display: flex;
    align-items: center;

    .filter {
      display: flex;
      align-items: center;
      margin: 0 5px;
    }
  }
}
</style>
