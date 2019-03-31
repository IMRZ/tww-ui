<template>
  <WhTooltip class="tooltip-region">
    <WhTooltipHeader>
      <WhIcon icon="small flag wh_main_emp_empire" />
      <span class="region-name">Altdorf</span>
    </WhTooltipHeader>
    <WhTooltipBody>
      <div>Province: Reikland</div>
      <div>Owner: The Empire</div>
    </WhTooltipBody>
  </WhTooltip>
</template>

<script>
import WhTooltip from "@/components/WhTooltip";
import WhTooltipHeader from "@/components/WhTooltipHeader";
import WhTooltipBody from "@/components/WhTooltipBody";
import WhIcon from "@/components/WhIcon";

export default {
  components: {
    WhTooltip,
    WhTooltipHeader,
    WhTooltipBody,
    WhIcon
  }
}
</script>

<style lang="scss" scoped>
.tooltip-region {
  width: 256px;
  filter: drop-shadow(0 0 15px #222222);
  padding-bottom: 10px;
}

.region-name {
  margin-left: 10px;
}
</style>
