<template>
  <WhTooltip class="tooltip-region">
    <WhTooltipHeader>
      <WhIcon icon="xs default icon_marker_settlement" />
      <span class="region-name">Karaz-a-Karak</span>
    </WhTooltipHeader>
    <WhTooltipBody>
      <div>Province: The Silver Road</div>
      <div>Climate: Mountain</div>
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
  margin-left: 8px;
}
</style>
