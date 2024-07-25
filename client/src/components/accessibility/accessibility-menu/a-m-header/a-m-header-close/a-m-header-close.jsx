import React, { useContext } from "react"
import { AccessibilityContext } from "../../../../../context/accessibility"
import "./a-m-header-close.scss"

const AMHeaderClose = () => {

    /* Global */
    const { setMenuOpen } = useContext(AccessibilityContext)

    /* Functions */
    const handleClick = () => {
        setMenuOpen(prev => !prev)
    }

    /* JSX */
    return (
        <button
            className="a-m-header-close-container"
            onClick={handleClick}
            aria-label="Close Accessibility Menu">
            <span className="material-symbols-outlined">close</span>
            <p>Close</p>
        </button>
    )
}

export default AMHeaderClose