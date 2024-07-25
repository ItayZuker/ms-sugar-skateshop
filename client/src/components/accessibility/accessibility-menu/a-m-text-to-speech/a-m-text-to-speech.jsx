import React, { useContext } from "react"
import { AccessibilityContext } from "../../../../context/accessibility"
import "./a-m-text-to-speech.scss"

const AMTextToSpeech = () => {

    /* Global */
    const { textToSpeech, setTextToSpeech } = useContext(AccessibilityContext)

    /* Functions */
    const toggleTextToSpeech = () => {
        setTextToSpeech(prev => !prev)
    }

    /* JSX */
    return (
        <div className="a-m-text-to-speech-container">
            <button onClick={toggleTextToSpeech} className={textToSpeech ? "active" : ""}>
                <span className="material-symbols-outlined">record_voice_over</span>
                Text to speech
            </button>
        </div>
    )
}

export default AMTextToSpeech