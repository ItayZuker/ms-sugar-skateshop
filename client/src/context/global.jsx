import React, { createContext, useState } from 'react'
import { useMedia } from "../hooks/useMedia"
import { useScroll } from "../hooks/useScroll"

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    /* Locale Variables */
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
    const [dialog, setDialog] = useState({
        contact: {
            loading: false,
            success: false,
            err: false
        }
    })

    /* Hooks */
    const { media } = useMedia()
    const { scroll } = useScroll()

    /* Functions */
    const resetDialog = () => {
        setDialog({
            contact: {
                loading: false,
                success: false,
                err: false
            }
        })
    }

    const payload = {
        media,
        scroll,
        isSideMenuOpen,
        dialog,
        setDialog,
        setIsSideMenuOpen,
        resetDialog
    }

    return (
        <GlobalContext.Provider value={payload}>
            {children}
        </GlobalContext.Provider>
    );
};