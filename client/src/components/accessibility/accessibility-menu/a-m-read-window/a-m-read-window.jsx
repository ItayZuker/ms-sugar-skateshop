import React, { useContext } from "react"
import "./a-m-read-window.scss"
import { AccessibilityContext } from "../../../../context/accessibility"

const AMReadWindow = () => {

    /* Global */
    const { readWindow, setReadWindow } = useContext(AccessibilityContext)

    /* Functions */
    const toggleReadWindow = () => {
        setReadWindow(prev => !prev)
    }

    /* JSX */
    return (
        <div className="a-m-read-window-container">
            <button onClick={toggleReadWindow} className={readWindow ? "active" : ""}>
            <span className="material-symbols-outlined">density_large</span>
                Read window
            </button>
        </div>
    )
}

export default AMReadWindow