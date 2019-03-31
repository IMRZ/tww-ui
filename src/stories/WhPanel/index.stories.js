import { storiesOf } from "@storybook/vue";

import PanelExample from "./PanelExample";
import PanelWithFields from "./PanelWithFields";

storiesOf("WhPanel", module)
  .add("example", () => PanelExample)
  .add("fields", () => PanelWithFields);
