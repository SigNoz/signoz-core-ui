import {Meta, StoryFn} from "@storybook/react";

import {Button,ButtonProps} from "./index"

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

const Template: StoryFn<ButtonProps> = (args:ButtonProps) => <Button {...args} />

export const Primary = Template.bind({});

Primary.args = {
  children: "Primary Button",
}