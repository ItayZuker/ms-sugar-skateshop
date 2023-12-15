import React, { useContext } from "react"
import { GlobalContext } from "../../../../context/global"
import ContactLoading from "./contact-loading/contact-loading"
import "./contact-message.scss"

const ContactMessage = ({ data }) => {

    /* Global Variables */
    const { dialog } = useContext(GlobalContext)

    /* JSX */
    return (
        <div className="contact-message-container">
            {dialog?.contact?.loading ? <ContactLoading/> : null}
            <textarea
                className={"message " +(data.message.error ? "error " : "") + (dialog?.contact?.loading ? "loading" : "")}
                placeholder={data.message.placeholder}
                name='message'
                type='textarea'/>
        </div>
    )
}

export default ContactMessage