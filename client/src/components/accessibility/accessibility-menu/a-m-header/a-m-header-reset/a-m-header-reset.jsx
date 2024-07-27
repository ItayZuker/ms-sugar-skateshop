import React, { useContext } from "react"
import { AccessibilityContext } from "../../../../../context/accessibility"
import { useTranslation } from "../../../../../hooks/useTranslation"
import "./a-m-header-reset.scss"

const AMHearerReset = () => {

    /* Global */
    const { resetAccesibility } = useContext(AccessibilityContext)
    const { t } = useTranslation()

    /* JSX */
    return (
        <button
            onClick={resetAccesibility}
            className="a-m-header-reset-container"
            aria-label={t("accessibility.reset_button.aria_label")}>
            <span className="material-symbols-outlined">refresh</span>
            <p>{t("accessibility.reset_button.title")}</p>
        </button>
    )
}

export default AMHearerReset