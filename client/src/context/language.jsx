import React, { createContext, useEffect, useState } from 'react'

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {

    /* Locale */
    const [lang, setLang] = useState(() => {
        const savedLang = localStorage.getItem('lang')
        return savedLang ? savedLang : 'en'
    })
    const [openLangPopup, setOpenLangPopup] = useState(false)

    /* Triggers */
    useEffect(() => {
        updateRTL()
    }, [lang])

    /* Functions */
    const updateRTL = () => {
        if (lang === "he") {
            document.body.setAttribute('dir', 'rtl');
        } else {
            document.body.setAttribute('dir', 'ltr');
        }
    }

    const updateLang = ({ lang }) => {
        localStorage.setItem('lang', lang)
        setLang(lang)
    }

    const payload = {
        lang,
        openLangPopup,
        setOpenLangPopup,
        updateLang
    }

    return (
        <LanguageContext.Provider value={payload}>
            {children}
        </LanguageContext.Provider>
    )
}