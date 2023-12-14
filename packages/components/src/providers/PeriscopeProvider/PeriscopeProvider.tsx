import { PeriscopeProviderContext } from "./context";

export interface PeriscopeProviderProps {
    children: React.ReactNode
}

export const PeriscopeProvider = ({children}: PeriscopeProviderProps) => {
    return <PeriscopeProviderContext.Provider value={{}}>{children}</PeriscopeProviderContext.Provider>
}

export default PeriscopeProvider