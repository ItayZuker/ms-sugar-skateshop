import React, { useContext } from "react"
import { LanguageContext } from "../../../../context/language"
import { useTranslation } from "../../../../hooks/useTranslation"
import "./lang-abort.scss"

const LangAbort = () => {

    /* Global */
    const { setOpenLangPopup } = useContext(LanguageContext)
    const { t } = useTranslation()

    /* Functions */
    const handleClick = () => {
        setOpenLangPopup(false)
    }

    /* JSX */
    return (
        <button
            aria-label={t("language.popup.close_button.aria_label")}
            onClick={handleClick}
            className="lang-abort-container">
            <span className="material-symbols-outlined">close</span>
        </button>
    )
}

export default LangAbort