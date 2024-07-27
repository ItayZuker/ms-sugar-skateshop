import React, { useEffect, useContext } from "react"
import { AccessibilityContext } from "../../../../context/accessibility"
import { useTranslation } from "../../../../hooks/useTranslation"
import "./a-m-big-cursor.scss"

const AMBigCursor = () => {

    /* Global */
    const { setBigCursor, bigCursor } = useContext(AccessibilityContext)
    const { t } = useTranslation()

    /* Triggers */
    useEffect(() => {
        if (bigCursor) {
            document.body.classList.add('big-cursor-active')
        } else {
            document.body.classList.remove('big-cursor-active')
        }
    }, [bigCursor])

    /* Functions */
    const toggleCursorSize = () => {
        setBigCursor(prev => !prev)
    }

    /* JSX */
    return (
        <div className="a-m-big-cursor-container">
            <button
                aria-pressed={bigCursor}
                aria-label={t("accessibility.cursor_button.aria_label")}
                onClick={toggleCursorSize}
                className={bigCursor ? "active" : ""}>
                <svg width="34" height="53" viewBox="0 0 34 53" fill="none">
                    <path d="M32.13 32.42L2.01 2L2 44.62L12 37.33L17.63 51.24L25.04 48.24L19.4 34.3L32.13 32.42Z" strokeWidth="3" strokeLinejoin="round"/>
                </svg>
                {t("accessibility.cursor_button.title")}
            </button>
        </div>
    )
}

export default AMBigCursor