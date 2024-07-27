import React, { useEffect, useContext } from "react"
import { AccessibilityContext } from "../../../../context/accessibility"
import { useTranslation } from "../../../../hooks/useTranslation"
import "./a-m-text-kerning.scss"

const AMTextKerning = () => {

    /* Global */
    const { kerning, setKerning } = useContext(AccessibilityContext)
    const { t } = useTranslation()

    /* Triggers */
    useEffect(() => {
        document.body.style.letterSpacing = `${kerning}em`
    }, [kerning])

    /* Functions */
    const increaseTextKerning = () => {
        setKerning(prev => prev + 0.05)
    }

    const decreaseTextKerning = () => {
        setKerning(prev => Math.max(prev - 0.05, 0)) // Ensure kerning does not go below 0
    }

    /* JSX */
    return (
        <div className="a-m-text-kerning-container">
            <button
                aria-label={t("accessibility.increase_text_spacing_button.aria_label")}
                onClick={increaseTextKerning}>
                <span className="material-symbols-outlined">unfold_more</span>
                {t("accessibility.increase_text_spacing_button.title")}
            </button>
            <button
                aria-label={t("accessibility.decrease_text_spacing_button.aria_label")}
                onClick={decreaseTextKerning}>
                <span className="material-symbols-outlined">unfold_less</span>
                {t("accessibility.decrease_text_spacing_button.title")}
            </button>
        </div>
    )
}

export default AMTextKerning