import React, { useContext } from "react"
import { AccessibilityContext } from "../../../../context/accessibility"
import { useTranslation } from "../../../../hooks/useTranslation"
import "./a-m-read-line.scss"

const AMReadLine = () => {

    /* Global */
    const { readLine, setReadLine } = useContext(AccessibilityContext)
    const { t } = useTranslation()

    /* Functions */
    const toggleReadLine = () => {
        setReadLine(prev => !prev)
    }

    /* JSX */
    return (
        <div className="a-m-read-line-container">
            <button
                aria-pressed={readLine}
                aria-label={t("accessibility.read_line_button.aria_label")}
                onClick={toggleReadLine}
                className={readLine ? "active" : ""}>
                <span className="material-symbols-outlined">power_input</span>
                {t("accessibility.read_line_button.title")}
            </button>
        </div>
    )
}

export default AMReadLine