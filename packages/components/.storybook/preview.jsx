import { Theme } from "@radix-ui/themes";

import "../src/styles/index.scss";
import "../src/styles.scss";

export const decorators = [
  (Story) => (
    <Theme>
      <Story />
    </Theme>
  ),
];
