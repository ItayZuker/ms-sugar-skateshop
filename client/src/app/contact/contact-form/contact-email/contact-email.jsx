import React, { useContext } from "react"
import { GlobalContext } from "../../../../context/global"
import "./contact-email.scss"

const ContactEmail = ({ data }) => {

    /* Global Variables */
    const { dialog } = useContext(GlobalContext)

    /* JSX */
    return (
        <div className="contact-email-container">
            <input
                className={"email " + (data.email.error ? "error" : "") + (dialog?.contact?.loading ? "loading" : "")}
                name="email"
                type="email"
                placeholder={data.email.placeholder}/>
        </div>
    )
}

export default ContactEmail