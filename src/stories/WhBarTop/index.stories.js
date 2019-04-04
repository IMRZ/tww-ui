import { storiesOf } from "@storybook/vue";

import WhBarTop from "@/components/WhBarTop";

import WhBarTopExample from "./WhBarTopExample";

storiesOf("WhBarTop", module)
  .add("default", () => ({
    components: { WhBarTop },
    template: `<WhBarTop style="display: inline-block; width: 150px;" />`
  }))
  .add("example", () => WhBarTopExample);
