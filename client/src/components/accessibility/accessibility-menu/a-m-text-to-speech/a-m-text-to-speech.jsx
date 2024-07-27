import React, { useContext, useEffect, useState } from "react"
import { AccessibilityContext } from "../../../../context/accessibility"
import { LanguageContext } from "../../../../context/language"
import { useTranslation } from "../../../../hooks/useTranslation"
import "./a-m-text-to-speech.scss"

const AMTextToSpeech = () => {

    /* Global */
    const { textToSpeech, setTextToSpeech } = useContext(AccessibilityContext)
    const { lang } = useContext(LanguageContext)
    const { t } = useTranslation()

    /* Locale */
    const [voice, setVoice] = useState(null)

    /* Fetch and set a female voice */
    useEffect(() => {
        const synth = window.speechSynthesis

        const loadVoices = () => {
            const voices = synth.getVoices()
            let femaleVoice = voices.find(
                v => v.lang === "he-IL" && v.name.toLowerCase().includes("female")
            ) || voices.find(
                v => v.lang === "he-IL" && v.name.toLowerCase().includes("woman")
            ) || voices.find(
                v => v.lang === "he-IL" && v.gender === "female"
            )

            if (!femaleVoice) {
                femaleVoice = voices.find(
                    v => v.lang.startsWith(lang) && v.name.toLowerCase().includes("female")
                ) || voices.find(
                    v => v.lang.startsWith(lang) && v.name.toLowerCase().includes("woman")
                ) || voices.find(
                    v => v.lang.startsWith(lang) && v.gender === "female"
                ) || voices.find(
                    v => v.lang.startsWith(lang)
                )
            }

            setVoice(femaleVoice || voices.find(v => v.lang.startsWith("en")))
        };

        loadVoices();
        if (synth.onvoiceschanged !== undefined) {
            synth.onvoiceschanged = loadVoices
        }
    }, [lang])

    /* Triggers */
    useEffect(() => {
        const handleMouseEnter = (event) => {
            const text = event.target.innerText || event.target.textContent
            if (text && voice) {
                const synth = window.speechSynthesis
                const utterance = new SpeechSynthesisUtterance(text)
                utterance.voice = voice
                utterance.lang = lang
                synth.speak(utterance)
            }
        };

        const handleMouseLeave = () => {
            window.speechSynthesis.cancel()
        }

        if (textToSpeech) {
            const elements = document.querySelectorAll('p, span, a, h1, h2, h3, h4, h5, h6')
            elements.forEach(element => {
                element.addEventListener('mouseenter', handleMouseEnter)
                element.addEventListener('mouseleave', handleMouseLeave)
            })

            return () => {
                elements.forEach(element => {
                    element.removeEventListener('mouseenter', handleMouseEnter)
                    element.removeEventListener('mouseleave', handleMouseLeave)
                })
                window.speechSynthesis.cancel()
            }
        } else {
            window.speechSynthesis.cancel()
        }
    }, [textToSpeech, lang, voice])

    /* Functions */
    const toggleTextToSpeech = () => {
        setTextToSpeech(prev => !prev)
    }

    /* JSX */
    return (
        <div className="a-m-text-to-speech-container">
            <button
                aria-pressed={textToSpeech}
                aria-label={t("accessibility.text_to_speech_button.aria_label")}
                onClick={toggleTextToSpeech}
                className={textToSpeech ? "active" : ""}>
                <span className="material-symbols-outlined">record_voice_over</span>
                {t("accessibility.text_to_speech_button.title")}
            </button>
        </div>
    )
}

export default AMTextToSpeech
