import React, { useContext } from "react"
import { LanguageContext } from "../../../../context/language"
import { useTranslation } from "../../../../hooks/useTranslation"
import "./language-switcher.scss"

const LanguageSwitcher = () => {

    /* Global */
    const { lang, setOpenLangPopup } = useContext(LanguageContext)
    const { t } = useTranslation()

    const handleClick = () => {
        setOpenLangPopup(true)
    }

    /* JSX */
    return (
        <button
            className="language-switcher-container"
            onClick={handleClick}
            aria-label={t("language.switcher.aria_label")}>
            <span className="material-symbols-outlined">language</span>
            <p>{lang}</p>
        </button>
    )
}

export default LanguageSwitcher