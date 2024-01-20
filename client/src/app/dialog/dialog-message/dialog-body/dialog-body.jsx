import React, { useContext } from "react"
import { GlobalContext } from "../../../../context/global"
import ContacrSuccessMessage from "./contact-success-message/contact-success-message"
import ContactErrorMessage from "./contact-error-message/contact-error-message"
import "./dialog-body.scss"

const DialogBody = () => {

    /* Global */
    const { dialog } = useContext(GlobalContext)

    /* JSX */
    return (
        <div className="dialog-body-container">
            {dialog?.contact?.success ? <ContacrSuccessMessage/> : null}
            {dialog?.contact?.err ? <ContactErrorMessage/> : null}
        </div>
    )
}

export default DialogBody