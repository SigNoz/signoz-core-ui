import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Header from "../components/Header";

export default {
  title: "Atom/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Header2 = Template.bind({});
Header2.args = {
  repoCount: 2,
  onGithubClickHandler: () => {},
};
