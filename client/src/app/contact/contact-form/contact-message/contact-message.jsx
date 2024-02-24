import React, { useRef, useEffect, useState } from "react"
import "./contact-message.scss"

const ContactMessage = ({ data }) => {

    /* Locale */
    const [value, setValue] = useState("")
    const textAreaRef = useRef(null)

    /* Triggers */
    useEffect(() => {
        autoGrowTextArea();
    }, [value])

    /* Functions */
    const onChange = (e) => {
        setValue(e.target.value);
    };

    const autoGrowTextArea = (e) => {
        const textArea = textAreaRef.current
        if (textArea && value) {
            textArea.style.height = 'auto'
            textArea.style.height = textArea.scrollHeight + 'px'
        } else {
            textArea.style.height = 'auto'
        }
    };
 
    /* JSX */
    return (
        <div className="contact-message-container">
            <textarea
                ref={textAreaRef}
                className={"message " + (data.message.error ? "error " : "")}
                placeholder={data.message.placeholder}
                name='message'
                type='textarea'
                onChange={(e) => {
                    onChange(e)
                    autoGrowTextArea(e)
                }}/>
        </div>
    )
}

export default ContactMessage