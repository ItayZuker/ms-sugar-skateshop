import React, { createContext, useEffect, useState } from 'react'

export const AccessibilityContext = createContext();

export const AccessibilityProvider = ({ children }) => {

    /* Locale */
    const [menuOpen, setMenuOpen] = useState(false)
    const [textSize, setTextSize] = useState(1)
    const [lineHeight, setLineHeight] = useState(1.5)
    const [isLineHeightModified, setIsLineHeightModified] = useState(false)
    const [kerning, setKerning] = useState(0)
    const [bigCursor, setBigCursor] = useState(false)
    const [readLine, setReadLine] = useState(false)
    const [readWindow, setReadWindow] = useState(false)
    const [underlineLinks, setUnderlineLinks] = useState(false)
    const [textToSpeech, setTextToSpeech] = useState(false)

    /* Functions */
    const resetAccesibility = () => {
        document.body.classList.remove('underline-links-active')
        document.body.classList.remove('custom-line-height')
        document.documentElement.style.removeProperty('--custom-line-height')
        document.documentElement.style.removeProperty('--global-text-size')
        setTextSize(1)
        setIsLineHeightModified(false)
        setLineHeight(1.5)
        setKerning(0)
        setBigCursor(false)
        setReadLine(false)
        setReadWindow(false)
        setUnderlineLinks(false)
        setTextToSpeech(false)
    }

    const payload = {
        setMenuOpen,
        menuOpen,
        setTextSize,
        textSize,
        setLineHeight,
        lineHeight,
        setIsLineHeightModified,
        isLineHeightModified,
        setKerning,
        kerning,
        setBigCursor,
        bigCursor,
        setReadLine,
        readLine,
        setReadWindow,
        readWindow,
        setUnderlineLinks,
        underlineLinks,
        setTextToSpeech,
        textToSpeech, 
        resetAccesibility
    }

    return (
        <AccessibilityContext.Provider value={payload}>
            {children}
        </AccessibilityContext.Provider>
    )
}