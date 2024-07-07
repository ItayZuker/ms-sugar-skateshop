import React, { useContext, useEffect } from "react"
import { LanguageContext } from "../../context/language"
import LangPopupHeader from "./land-popup-header/lang-popup-header"
import LangPopupMenu from "./lang-popup-menu/lang-popup-menu"
import "./lang-popup.scss"

const LangPopup = () => {

    /* Global */
    const { openLangPopup, setOpenLangPopup } = useContext(LanguageContext)

    /* Triggers */
    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown)
        return () => {
            document.removeEventListener("keydown", handleKeyDown)
        }
    }, [openLangPopup])

    /* Function */
    const handleKeyDown = (e) => {
        if (e.key === "Escape") {
            setOpenLangPopup(false)
        }
    }

    const handleClick = () => {
        setOpenLangPopup(false)
    }

    /* JSX */
    if (openLangPopup) {
        return (
            <div
            onKeyDown={handleKeyDown}
            className="lang-popup-container">
                <div className="lang-popup-inner-container">
                    <LangPopupHeader/>
                    <LangPopupMenu/>
                </div>
                <div
                    onClick={handleClick}
                    className="lang-popup-cover">
                </div>
            </div>
        )
    }
}

export default LangPopup