import React, { useContext, useEffect } from "react"
import "./a-m-text-size.scss"
import { AccessibilityContext } from "../../../../context/accessibility"

const AMTextSize = () => {

    /* Global */
    const { textSize, setTextSize } = useContext(AccessibilityContext)

    /* Triggers */
    useEffect(() => {
        document.documentElement.style.setProperty('--global-text-size', textSize)
    }, [textSize])

    /* Functions */
    const increaseTextSize = () => {
        setTextSize(prev => prev + 0.1)
    }

    const decreaseTextSize = () => {
        setTextSize(prev => Math.max(prev - 0.1, 1)) // Ensure text size does not go below 1

    }

    /* JSX */
    return (
        <div className="a-m-text-size-container">
            <button onClick={increaseTextSize}>
                <span className="material-symbols-outlined">add</span>
                Increase text size
            </button>
            <button onClick={decreaseTextSize}>
                <span className="material-symbols-outlined">remove</span>
                Decrease text size
            </button>
        </div>
    )
}

export default AMTextSize