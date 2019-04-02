<template>
  <WhTooltip class="tooltip-region-owner">
    <WhTooltipBody>
      <div>Province: Reikland</div>
      <div>Region: Altdorf</div>
      <div class="owner">
        <span>Owner: The Empire</span>
        <WhIcon class="icon" :icon="`small flag wh_main_emp_empire`" />
      </div>
    </WhTooltipBody>
  </WhTooltip>
</template>

<script>
import WhTooltip from "@/components/WhTooltip";
import WhTooltipBody from "@/components/WhTooltipBody";
import WhIcon from "@/components/WhIcon";

export default {
  components: {
    WhTooltip,
    WhTooltipBody,
    WhIcon
  }
}
</script>

<style lang="scss" scoped>
.tooltip-region-owner {
  padding-right: 4px;

  .owner {
    display: flex;
    align-items: center;

    .icon {
      margin-left: 4px;
      width: 16px !important;
      height: 16px !important;
    }
  }
}
</style>
