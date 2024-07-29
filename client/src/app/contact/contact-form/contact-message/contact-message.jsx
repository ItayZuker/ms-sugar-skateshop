import React, { useRef, useState, useContext } from "react"
import { GlobalContext } from "../../../../context/global"
import { useTranslation } from "../../../../hooks/useTranslation"
import CMessageCounter from "./c-message-counter/c-message-counter"
import "./contact-message.scss"

const ContactMessage = ({ data, triggerError }) => {

    /* Global */
    const { settings } = useContext(GlobalContext)
    const { t } = useTranslation()

    /* Locale */
    const [value, setValue] = useState("")
    const textAreaRef = useRef(null)

    /* Functions */
    const handleKeyDown = (e) => {
        const maxCharacters = settings?.contact?.maxCharacters

        if (value.length >= maxCharacters) {
            const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Tab', 'Escape']

            if (!allowedKeys.includes(e.key)) {
                e.preventDefault()
                triggerError({ type: "maxCharacters" })
            }
        }
    }

    const handlePaste = (e) => {
        e.preventDefault()
        const pastedText = e.clipboardData.getData('text')
        const newText = value + pastedText
        handleChange({ target: { value: newText.slice(0, settings?.contact?.maxCharacters) } })
    }

    const handleChange = (e) => {
        setValue(e.target.value)
    }

 
    /* JSX */
    return (
        <div className="contact-message-container">
            <textarea
                aria-label={t("pages.contact.message_input.aria_label")}
                ref={textAreaRef}
                className={"message " + (data.message.error ? "error " : "")}
                placeholder={t("pages.contact.message_input.placeholder")}
                name='message'
                type='textarea'
                onPaste={handlePaste}
                value={value}
                onKeyDown={handleKeyDown}
                onChange={handleChange}/>
            <CMessageCounter 
                charactersAmount={value.length}
                data={data}/>
        </div>
    )
}

export default ContactMessage