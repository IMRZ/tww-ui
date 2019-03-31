import { storiesOf } from "@storybook/vue";

import WhIcon from "../components/WhIcon.vue";
import WhCheckbox from "../components/WhCheckbox.vue";
import WhButtonRound from "../components/WhButtonRound.vue";

storiesOf("WhIcon", module)
  .add("medium flag", () => ({
    components: { WhIcon },
    render() {
      return <WhIcon icon="flag wh2_dlc11_cst_noctilus" />;
    }
  })).add("resource", () => ({
    components: { WhIcon },
    render() {
      return (
        <div>
          <WhIcon icon="resource resource_amber" />
        </div>
      );
    }
  })).add("default", () => ({
    components: { WhIcon },
    render() {
      return (
        <div>
          <WhIcon icon="md default icon_port" />
        </div>
      );
    }
  }));

storiesOf("WhCheckbox", module).add("test", () => ({
  components: { WhCheckbox },
  template: `
    <div>
      <WhCheckbox v-model="checked" />
    </div>
  `,
  data() {
    return {
      checked: false
    };
  }
}));

storiesOf("WhButtonRound", module).add("test", () => ({
  components: { WhButtonRound },
  template: `
    <div>
      <WhButtonRound />
    </div>
  `,
  data() {
    return {
      checked: false
    };
  }
}));
