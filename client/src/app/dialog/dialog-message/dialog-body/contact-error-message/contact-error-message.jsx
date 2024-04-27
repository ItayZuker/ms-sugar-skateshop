import React, { useContext } from "react"
import { GlobalContext } from "../../../../../context/global"
import "./contact-error-message.scss"

const ContactErrorMessage = () => {

    /* Global */
    const { dialog } = useContext(GlobalContext)

    /* JSX */
    return (
        <div className="contact-error-message-container">
            <h2>Sorry :(</h2>
            <p>{dialog?.contact?.message || "Something went wrong."}</p>
        </div>
    )
}

export default ContactErrorMessage