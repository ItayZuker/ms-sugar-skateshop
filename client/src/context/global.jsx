import React, { createContext, useState } from 'react'
import { useMedia } from "../hooks/useMedia"
import { useScroll } from "../hooks/useScroll"

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    /* Locale Variables */
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)

    /* Hooks */
    const { media } = useMedia({ HTMLelement: document.body })
    const { scroll } = useScroll()

    const payload = {
        media,
        scroll,
        isSideMenuOpen,
        setIsSideMenuOpen
    }

    return (
        <GlobalContext.Provider value={payload}>
            {children}
        </GlobalContext.Provider>
    );
};