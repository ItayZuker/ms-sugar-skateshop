import React from "react"
import "./contact-email.scss"

const ContactEmail = ({ data }) => {

    /* JSX */
    return (
        <div className="contact-email-container">
            <input
                aria-label="Email"
                className={"email " + (data.email.error ? "error" : "")}
                name="email"
                type="email"
                placeholder={data.email.placeholder}/>
        </div>
    )
}

export default ContactEmail