
import WhButtonFrame from "@/components/WhButtonFrame";
import WhCheckbox from "@/components/WhCheckbox";
import WhIcon from "@/components/WhIcon";
import WhPanel from "@/components/WhPanel";
import WhPanelField from "@/components/WhPanelField";
import WhRadio from "@/components/WhRadio";
import WhTooltip from "@/components/WhTooltip";
import WhTooltipBody from "@/components/WhTooltipBody";
import WhTooltipHeader from "@/components/WhTooltipHeader";

const components = {
  WhButtonFrame,
  WhCheckbox,
  WhIcon,
  WhPanel,
  WhPanelField,
  WhRadio,
  WhTooltip,
  WhTooltipBody,
  WhTooltipHeader
};

function install(Vue) {
  Object.entries(components).forEach(([name, component]) => {
    Vue.component(name, component);
  });
}

export default {
  install
};
