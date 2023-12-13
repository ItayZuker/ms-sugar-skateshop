import React from "react"
import "./contact-message.scss"

const ContactMessage = ({ data }) => {

    /* JSX */
    return (
        <div className="contact-message-container">
            <textarea
                className={"message " + (data.message.error ? "error" : "")}
                placeholder={data.message.placeholder}
                name='message'
                type='textarea'/>
        </div>
    )
}

export default ContactMessage