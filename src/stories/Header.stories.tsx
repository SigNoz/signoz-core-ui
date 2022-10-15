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

const Template: ComponentStory<typeof Header> = () => <Header />;

export const Header1 = Template.bind({});
Header1.args = {};
