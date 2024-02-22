import React, { useContext, useRef, useEffect, useState } from "react"
import { GlobalContext } from "../../../../context/global"
import ContactLoading from "./contact-loading/contact-loading"
import "./contact-message.scss"

const ContactMessage = ({ data }) => {

    /* Global */
    const { dialog } = useContext(GlobalContext)

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
        console.log(111)
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
            {dialog?.contact?.loading ? <ContactLoading/> : null}
            <textarea
                ref={textAreaRef}
                className={"message " + (data.message.error ? "error " : "") + (dialog?.contact?.loading ? "loading" : "")}
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