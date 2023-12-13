import React, { useContext } from "react"
import { GlobalContext } from "../../../../context/global"
import ContactErrorMessage from "./contact-error-message/contact-error-message"
import "./error-body.scss"

const ErrorBody = () => {

    /* Global Variables */
    const { dialog } = useContext(GlobalContext)

    /* JSX */
    return (
        <div className="error-body-container">
            {dialog.contact.err ? <ContactErrorMessage/> : null}
        </div>
    )
}

export default ErrorBody