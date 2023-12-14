import { ComponentProps } from "react";
import { Button } from "@radix-ui/themes";

export enum VARIANT {
  primary = "primary",
  secondary = "secondary",
}

export type ButtonProps = ComponentProps<typeof Button> & {
  children: React.ReactNode;
};
