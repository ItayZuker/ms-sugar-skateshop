import React from "react"
import "./accessibility-button.scss"

const AccessibilityButton = ({ setMenuOpen }) => {

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
            <span class="material-symbols-outlined">accessibility</span>
            <span class="material-symbols-outlined">accessibility_new</span>
        </button>
    )
}

export default AccessibilityButton