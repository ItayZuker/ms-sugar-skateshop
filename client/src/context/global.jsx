import React, { createContext } from 'react';
import {useMedia} from "../hooks/useMedia";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {

    /* Hooks */
    const { media } = useMedia({ HTMLelement: document.body })

    const payload = {
        media
    }

    return (
        <GlobalContext.Provider value={payload}>
            {children}
        </GlobalContext.Provider>
    );
};