<template>
  <div>
    <WhPanel class="overlays">
    <div class="panel-title">Overlays</div>
    <WhPanelField label="Ownership" icon="md default icon_cross_small" >
      <WhRadio v-model="selected" value="a" />
    </WhPanelField>
    <WhPanelField label="Diplomatic status" icon="md default icon_filter_faction" >
      <WhRadio v-model="selected" value="b" />
    </WhPanelField>
    <WhPanelField label="Attitude" icon="md default icon_filter_climate" >
      <WhRadio v-model="selected" value="c" />
    </WhPanelField>
  </WhPanel>
  <WhPanel class="settings">
    <div class="panel-title">Settings</div>
    <WhPanelField label="Toggle" icon="md default icon_options" >
      <WhCheckbox v-model="toggle" />
    </WhPanelField>
    <WhPanelField label="Slider" icon="md warhammer2 icon_options" >
      <input type="range" min="0" max="100" :value="opacity" style="width: 80px;">
    </WhPanelField>
  </WhPanel>
  </div>
</template>

<script>
import WhPanel from "@/components/WhPanel";
import WhPanelField from "@/components/WhPanelField";
import WhRadio from "@/components/WhRadio";
import WhCheckbox from "@/components/WhCheckbox";

export default {
  components: {
    WhPanel,
    WhPanelField,
    WhRadio,
    WhCheckbox
  },
  data() {
    return {
      selected: "a",
      opacity: 100,
      toggle: true,
    };
  }
};
</script>

<style lang="scss" scoped>
.overlays {
  width: 280px;
  height: 400px;
}

.settings {
  width: 280px;
}

.panel-title {
  margin: 5px;
  text-align: center;
  font-size: 1.3em;
}
</style>
