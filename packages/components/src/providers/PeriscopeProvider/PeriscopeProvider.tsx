import { useInsertionEffect, useRef } from "react";
import { PeriscopeProviderContext } from "./context";

export interface PeriscopeProviderProps {
    children: React.ReactNode
}

const createStyleInsertionLink = () => {
    const styleSheetURL = new URL('./index.css', import.meta.url).href
    const linkTag = document.createElement('link');
    linkTag.href = styleSheetURL;
    linkTag.rel = 'stylesheet';

    document.head.appendChild(linkTag);
}


export const PeriscopeProvider = ({children}: PeriscopeProviderProps) => {
    const cssInserted = useRef(false);

    useInsertionEffect(() => {
        if (cssInserted.current === false) {
            return;
        } else {
            createStyleInsertionLink()
        }
    })

    return <PeriscopeProviderContext.Provider value={{}}>{children}</PeriscopeProviderContext.Provider>
}

export default PeriscopeProvider