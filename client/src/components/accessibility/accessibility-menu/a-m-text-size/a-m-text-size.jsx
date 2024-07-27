import React, { useContext, useEffect } from "react"
import { AccessibilityContext } from "../../../../context/accessibility"
import { useTranslation } from "../../../../hooks/useTranslation"
import "./a-m-text-size.scss"

const AMTextSize = () => {

    /* Global */
    const { textSize, setTextSize } = useContext(AccessibilityContext)
    const { t } = useTranslation()

    /* Triggers */
    useEffect(() => {
        document.documentElement.style.setProperty('--global-text-size', textSize)
    }, [textSize])

    /* Functions */
    const increaseTextSize = () => {
        setTextSize(prev => prev + 0.1)
    }

    const decreaseTextSize = () => {
        setTextSize(prev => Math.max(prev - 0.1, 1)) // Ensure text size does not go below 1

    }

    /* JSX */
    return (
        <div className="a-m-text-size-container">
            <button
                aria-label={t("accessibility.increase_text_size_button.aria_label")}
                onClick={increaseTextSize}>
                <span className="material-symbols-outlined">add</span>
                {t("accessibility.increase_text_size_button.title")}
            </button>
            <button
                aria-label={t("accessibility.decrease_text_size_button.aria_label")}
                onClick={decreaseTextSize}>
                <span className="material-symbols-outlined">remove</span>
                {t("accessibility.decrease_text_size_button.title")}
            </button>
        </div>
    )
}

export default AMTextSize