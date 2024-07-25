import React, { useContext } from "react"
import { AccessibilityContext } from "../../../../../context/accessibility"
import "./a-m-header-reset.scss"

const AMHearerReset = () => {

    /* Global */
    const { resetAccesibility } = useContext(AccessibilityContext)

    /* JSX */
    return (
        <button
            onClick={resetAccesibility}
            className="a-m-header-reset-container"
            aria-label="Reset Accessibility Menu">
            <span className="material-symbols-outlined">refresh</span>
            <p>Reset</p>
        </button>
    )
}

export default AMHearerReset