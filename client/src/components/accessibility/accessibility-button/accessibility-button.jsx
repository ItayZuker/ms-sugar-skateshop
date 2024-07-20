import React from "react"
import "./accessibility-button.scss"

const AccessibilityButton = ({ setMenuOpen }) => {

    /* Functions */
    const handleClick = () => {
        setMenuOpen(prev => !prev)
    }

    /* JSX */
    return (
        <div
            className="accessibility-button"
            onClick={handleClick}>
            <span class="material-symbols-outlined">accessibility</span>
            <span class="material-symbols-outlined">accessibility_new</span>
        </div>
    )
}

export default AccessibilityButton