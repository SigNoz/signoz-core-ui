import { Theme } from "@radix-ui/themes";

import "@radix-ui/themes/styles.css";
import "../src/styles/index.scss";

export const decorators = [
  (Story) => (
    <Theme>
      <Story />
    </Theme>
  ),
];
