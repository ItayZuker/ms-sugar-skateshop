import React, { useContext } from "react"
import { AccessibilityContext } from "../../../context/accessibility"
import { useTranslation } from "../../../hooks/useTranslation"
import "./accessibility-button.scss"

const AccessibilityButton = () => {

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
            className="accessibility-button"
            onClick={handleClick}
            aria-label={t("accessibility.menu_button.aria_label")}>
            <span className="material-symbols-outlined">accessibility</span>
            <span className="material-symbols-outlined">accessibility_new</span>
        </button>
    )
}

export default AccessibilityButton