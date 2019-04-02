import { storiesOf } from "@storybook/vue";

import WhTooltip from "@/components/WhTooltip.vue";
import WhTooltipHeader from "@/components/WhTooltipHeader.vue";
import WhTooltipBody from "@/components/WhTooltipBody.vue";
import WhIcon from "@/components/WhIcon.vue";

import TooltipRegion1 from "./TooltipRegion1";
import TooltipRegion2 from "./TooltipRegion2";

import TooltipRegionOwner from "./TooltipRegionOwner";

storiesOf("WhTooltip", module)
  .add("test", () => ({
    components: { WhTooltip },
    render() {
      const style = {
        maxWidth: "200px",
        height: "200px"
      };
      return <WhTooltip style={style} />;
    }
  }))
  .add("text", () => ({
    components: { WhTooltip, WhTooltipBody },
    template: `
      <WhTooltip style="position: absolute; top: 0; left: 0;">
        <WhTooltipBody>Settings</WhTooltipBody>
      </WhTooltip>
    `
  }))
  .add("header", () => ({
    components: { WhTooltip, WhTooltipHeader, WhTooltipBody, WhIcon },
    template: `
      <WhTooltip style="width: 256px;">
        <WhTooltipHeader>
          <WhIcon style="margin-left: -2px" icon="climate mountain" />
          <span style="margin-left: 10px;">Karaz-a-Karak</span>
        </WhTooltipHeader>
        <WhTooltipBody>
          <div>Province: The Silver Road</div>
          <div>Climate: Mountain</div>
          <p style="color: yellow;">This region holds the province capital.</p>
        </WhTooltipBody>
      </WhTooltip>
    `
  }))
  .add("region variant 1", () => ({
    components: { TooltipRegion1 },
    template: `<TooltipRegion1 />`
  }))
  .add("region variant 2", () => ({
    components: { TooltipRegion2 },
    template: `<TooltipRegion2 />`
  }))
  .add("region owner", () => ({
    components: { TooltipRegionOwner },
    template: `<TooltipRegionOwner style="display: inline-block;" />`
  }));
