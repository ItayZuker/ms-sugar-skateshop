import React, { useContext } from "react"
import "./a-m-read-line.scss"
import { AccessibilityContext } from "../../../../context/accessibility"

const AMReadLine = () => {

    /* Global */
    const { readLine, setReadLine } = useContext(AccessibilityContext)

    /* Functions */
    const toggleReadLine = () => {
        setReadLine(prev => !prev)
    }

    /* JSX */
    return (
        <div className="a-m-read-line-container">
            <button onClick={toggleReadLine} className={readLine ? "active" : ""}>
                <span className="material-symbols-outlined">power_input</span>
                Read line
            </button>
        </div>
    )
}

export default AMReadLine