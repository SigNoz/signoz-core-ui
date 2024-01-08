import { Meta } from "@storybook/react";
import Color from "./components/Color";

export default {
  title: "Atoms/Color",
  component: Color,
} as Meta;

export const Colors = () => {
  return <Color />;
};
