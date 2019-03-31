import { storiesOf } from "@storybook/vue";

import WhRadio from "@/components/WhRadio";

storiesOf("WhRadio", module).add("test", () => ({
  components: { WhRadio },
  template: `
    <div style="background-color: grey;">
      <WhRadio v-model="selected" value="a" />
      <WhRadio v-model="selected" value="b" />
      <WhRadio v-model="selected" value="c" />
    </div>
  `,
  data() {
    return {
      selected: "a"
    };
  }
}));
