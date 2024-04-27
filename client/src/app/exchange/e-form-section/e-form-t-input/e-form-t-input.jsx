import React, { useRef, useEffect, useState, useContext } from "react"
import { GlobalContext } from "../../../../context/global"
import { useMedia } from "../../../../hooks/useMedia"
import EFormTCounter from "./e-form-t-counter/e-form-t-counter"
import "./e-form-t-input.scss"

const EFormTInput = ({ value, onChange, textDir, data, triggerError }) => {

    /* Global */
    const { settings } = useContext(GlobalContext)

    const { media } = useMedia()

    /* Locale */
    const textAreaRef = useRef(null)

    /* Functions */
    const handleKeyDown = (e) => {
        const maxCharacters = settings?.exchange?.maxCharacters;

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
        onChange({ target: { value: newText.slice(0, settings?.exchange?.maxCharacters) } })
    }

    /* JSX */
    return (
        <div className="e-form-t-input-container">
            <textarea
                ref={textAreaRef}
                className={"text " +
                    (textDir === "rtl" ? "dir-rtl " : "dir-ltr ") +
                    (data?.text?.error ? "error " : "")}
                name="text"
                placeholder="Write here..."
                value={value}
                onPaste={handlePaste}
                onKeyDown={handleKeyDown}
                onChange={onChange}/>
            <EFormTCounter
                charactersAmount={value.length}
                data={data}/>
        </div>
    )
}

export default EFormTInput