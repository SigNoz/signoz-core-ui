import { Toaster } from "@/components/ui/sonner";
import { PeriscopeProviderContext } from "./context";

export interface PeriscopeProviderProps {
  children: React.ReactNode;
}

export const PeriscopeProvider = ({ children }: PeriscopeProviderProps) => {
  return (
    <PeriscopeProviderContext.Provider value={{}}>
      {children}

      <Toaster />
    </PeriscopeProviderContext.Provider>
  );
};

export default PeriscopeProvider;
