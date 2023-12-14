import dynamicIconImports from "lucide-react/dynamicIconImports";
import { LucideProps } from "lucide-react";

export interface IconProps extends Omit<LucideProps, "ref"> {
  name: keyof typeof dynamicIconImports;
  fallback?: React.ReactNode;
}
