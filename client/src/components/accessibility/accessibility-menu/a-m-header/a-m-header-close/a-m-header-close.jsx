import React, { useContext } from "react"
import { AccessibilityContext } from "../../../../../context/accessibility"
import { useTranslation } from "../../../../../hooks/useTranslation"
import "./a-m-header-close.scss"

const AMHeaderClose = () => {

    /* Global */
    const { setMenuOpen } = useContext(AccessibilityContext)
    const { t } = useTranslation()

    /* Functions */
    const handleClick = () => {
        setMenuOpen(prev => !prev)
    }

    /* JSX */
    return (
        <button
            className="a-m-header-close-container"
            onClick={handleClick}
            aria-label={t("accessibility.close_button.aria_label")}>
            <span className="material-symbols-outlined">close</span>
            <p>{t("accessibility.close_button.title")}</p>
        </button>
    )
}

export default AMHeaderClose