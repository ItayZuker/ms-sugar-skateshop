import React, { useEffect, useContext } from "react"
import { AccessibilityContext } from "../../../../context/accessibility"
import "./a-m-text-kerning.scss"

const AMTextKerning = () => {

    /* Global */
    const { kerning, setKerning } = useContext(AccessibilityContext)

    /* Triggers */
    useEffect(() => {
        document.body.style.letterSpacing = `${kerning}em`
    }, [kerning])

    /* Functions */
    const increaseTextKerning = () => {
        setKerning(prev => prev + 0.05)
    }

    const decreaseTextKerning = () => {
        setKerning(prev => Math.max(prev - 0.05, 0)) // Ensure kerning does not go below 0
    }

    /* JSX */
    return (
        <div className="a-m-text-kerning-container">
            <button onClick={increaseTextKerning}>
                <span className="material-symbols-outlined">unfold_more</span>
                Increase text spacing
            </button>
                <button onClick={decreaseTextKerning}>
            <span className="material-symbols-outlined">unfold_less</span>
                Decrease text spacing
            </button>
        </div>
    )
}

export default AMTextKerning