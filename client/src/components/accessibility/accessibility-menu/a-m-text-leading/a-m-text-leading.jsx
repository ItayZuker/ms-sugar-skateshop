import React, { useEffect, useContext } from "react"
import { AccessibilityContext } from "../../../../context/accessibility"
import { useTranslation } from "../../../../hooks/useTranslation"
import "./a-m-text-leading.scss"

const AMTextLeading = () => {

    /* Global */
    const { lineHeight, setLineHeight, isLineHeightModified, setIsLineHeightModified } = useContext(AccessibilityContext)
    const { t } = useTranslation()

    /* Triggers */
    useEffect(() => {
        if (isLineHeightModified) {
            document.body.classList.add('custom-line-height')
            document.documentElement.style.setProperty('--custom-line-height', lineHeight)
        }
    }, [lineHeight, isLineHeightModified])

    /* Functions */
    const increaseTextLeading = () => {
        setLineHeight(prev => prev + 0.1)
        setIsLineHeightModified(true)
    }

    const decreaseTextLeading = () => {
        setLineHeight(prev => Math.max(prev - 0.1, 1.5))
        setIsLineHeightModified(true)
    }

    /* JSX */
    return (
        <div className="a-m-text-leading-container">
            <button
                aria-label={t("accessibility.increase_line_height_button.aria_label")}
                onClick={increaseTextLeading}>
                <span className="material-symbols-outlined">unfold_more</span>
                {t("accessibility.increase_line_height_button.title")}
            </button>
            <button
                aria-label={t("accessibility.decrease_line_height_button.aria_label")}
                onClick={decreaseTextLeading}>
                <span className="material-symbols-outlined">unfold_less</span>
                {t("accessibility.decrease_line_height_button.title")}
            </button>
        </div>
    )
}

export default AMTextLeading