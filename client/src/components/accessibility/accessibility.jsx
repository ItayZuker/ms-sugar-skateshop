import React, { useState } from "react"
import "./accessibility.scss"

const Accessibility = () => {

    /* LOcale */
    const [textSize, setTextSize] = useState(16)
    const [highContrast, setHighContrast] = useState(false)

    /* Functions */
    const increaseTextSize = () => {
        const newSize = textSize + 2
        setTextSize(newSize)
        document.documentElement.style.fontSize = `${newSize}px`
    }
    
    const decreaseTextSize = () => {
        const newSize = textSize > 10 ? textSize - 2 : 10
        setTextSize(newSize)
        document.documentElement.style.fontSize = `${newSize}px`
    }
  
    const toggleHighContrast = () => {
      setHighContrast(!highContrast);
      document.body.classList.toggle('high-contrast')
    }

    /* JSX */
    return (
        <div className="accessibility-container">
            <button onClick={increaseTextSize}>A+</button>
            <button onClick={decreaseTextSize}>A-</button>
            <button onClick={toggleHighContrast}>
                {highContrast ? 'Normal Contrast' : 'High Contrast'}
            </button>
        </div>
    )
}

export default Accessibility