import { storiesOf } from "@storybook/vue";

import WhButtonFrame from "@/components/WhButtonFrame.vue";
import WhButtonFrameWithImage from "./WhButtonFrameWithImage";

storiesOf("WhButtonFrame", module)
  .add("default", () => ({
    components: { WhButtonFrame },
    template: `<WhButtonFrame style="width: 180px; height: 180px;" />`
  }))
  .add("with image", () => WhButtonFrameWithImage);
