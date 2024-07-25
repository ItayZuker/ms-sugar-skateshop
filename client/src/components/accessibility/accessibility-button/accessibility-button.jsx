import React, { useContext } from "react"
import { AccessibilityContext } from "../../../context/accessibility"
import "./accessibility-button.scss"

const AccessibilityButton = () => {

    /* Global */
    const { setMenuOpen } = useContext(AccessibilityContext)

    /* Functions */
    const handleClick = () => {
        setMenuOpen(prev => !prev)
    }

    /* JSX */
    return (
        <button
            className="accessibility-button"
            onClick={handleClick}
            aria-label="Toggle Accessibility Menu">
            <span className="material-symbols-outlined">accessibility</span>
            <span className="material-symbols-outlined">accessibility_new</span>
        </button>
    )
}

export default AccessibilityButton