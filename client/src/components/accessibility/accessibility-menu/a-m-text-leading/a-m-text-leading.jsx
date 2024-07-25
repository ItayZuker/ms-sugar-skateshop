import React, { useEffect, useContext } from "react"
import "./a-m-text-leading.scss"
import { AccessibilityContext } from "../../../../context/accessibility"

const AMTextLeading = () => {

    /* Global */
    const { lineHeight, setLineHeight, isLineHeightModified, setIsLineHeightModified } = useContext(AccessibilityContext)

    /* Triggers */
    useEffect(() => {
        if (isLineHeightModified) {
            document.body.classList.add('custom-line-height')
            document.documentElement.style.setProperty('--custom-line-height', lineHeight)
        }
    }, [lineHeight, isLineHeightModified])

    /* Functions */
    const increaseTextLeading = () => {
        setLineHeight(prev => prev + 0.1)
        setIsLineHeightModified(true)
    }

    const decreaseTextLeading = () => {
        setLineHeight(prev => Math.max(prev - 0.1, 1.5))
        setIsLineHeightModified(true)
    }

    /* JSX */
    return (
        <div className="a-m-text-leading-container">
            <button onClick={increaseTextLeading}>
                <span className="material-symbols-outlined">unfold_more</span>
                Increase line height
            </button>
                <button onClick={decreaseTextLeading}>
            <span className="material-symbols-outlined">unfold_less</span>
                Decrease line height
            </button>
        </div>
    )
}

export default AMTextLeading