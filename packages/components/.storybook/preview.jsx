import { Theme } from "@radix-ui/themes";

import "@radix-ui/themes/styles.css";
import "../src/styles.scss";

export const decorators = [
  (Story) => (
    <Theme>
      <Story />
    </Theme>
  ),
];
