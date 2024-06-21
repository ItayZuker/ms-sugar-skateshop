import React, { createContext, useState } from 'react'

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {

    /* Locale */
    const [lang, setLang] = useState(() => {
        const savedLang = localStorage.getItem('lang')
        return savedLang ? savedLang : 'en'
    })

    /* Functions */
    const updateLang = ({ lang }) => {
        localStorage.setItem('lang', lang)
        setLang(lang)
    }

    const payload = {
        lang,
        updateLang
    }

    return (
        <LanguageContext.Provider value={payload}>
            {children}
        </LanguageContext.Provider>
    )
}