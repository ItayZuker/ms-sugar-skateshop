import React, { useContext } from "react"
import { LanguageContext } from "../../../../context/language"
import "./language-switcher.scss"

const LanguageSwitcher = () => {

    /* Global */
    const { lang, setOpenLangPopup } = useContext(LanguageContext)

    const handleClick = () => {
        setOpenLangPopup(true)
    }

    /* JSX */
    return (
        <div
            className="language-switcher-container"
            onClick={handleClick}>
                <p>
                <span className="material-symbols-outlined">language</span>
                {lang}</p>
        </div>
    )
}

export default LanguageSwitcher