import { Theme } from "@radix-ui/themes";

import "../src/styles.scss";

export const decorators = [
  (Story) => (
    <Theme>
      <Story />
    </Theme>
  ),
];
