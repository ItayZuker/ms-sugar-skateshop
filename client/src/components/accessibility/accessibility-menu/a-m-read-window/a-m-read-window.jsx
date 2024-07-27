import React, { useContext } from "react"
import { AccessibilityContext } from "../../../../context/accessibility"
import { useTranslation } from "../../../../hooks/useTranslation"
import "./a-m-read-window.scss"

const AMReadWindow = () => {

    /* Global */
    const { readWindow, setReadWindow } = useContext(AccessibilityContext)
    const { t } = useTranslation()

    /* Functions */
    const toggleReadWindow = () => {
        setReadWindow(prev => !prev)
    }

    /* JSX */
    return (
        <div className="a-m-read-window-container">
            <button
                aria-pressed={readWindow}
                aria-label={t("accessibility.read_window_button.aria_label")}
                onClick={toggleReadWindow}
                className={readWindow ? "active" : ""}>
            <span className="material-symbols-outlined">density_large</span>
            {t("accessibility.read_window_button.title")}
            </button>
        </div>
    )
}

export default AMReadWindow