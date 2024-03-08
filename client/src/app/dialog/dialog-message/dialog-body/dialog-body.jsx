import React, { useContext } from "react"
import { GlobalContext } from "../../../../context/global"
import ContacrSuccessMessage from "./contact-success-message/contact-success-message"
import ContactErrorMessage from "./contact-error-message/contact-error-message"
import ExchangeSuccessMessage from "./exchange-success-message/exchange-success-message"
import ExchangeErrorMessage from "./exchange-error-message/exchange-error-message"
import NotifyAvailableSuccessMessage from "./notify-available-success-message/notify-available-success-message"
import NotifyAvailableErrorMessage from "./notify-available-error-message/notify-available-error-message"
import "./dialog-body.scss"

const DialogBody = () => {

    /* Global */
    const { dialog } = useContext(GlobalContext)

    /* JSX */
    return (
        <div className="dialog-body-container">
            {dialog?.contact?.success ? <ContacrSuccessMessage/> : null}
            {dialog?.contact?.err ? <ContactErrorMessage/> : null}
            {dialog?.exchange?.success ? <ExchangeSuccessMessage/> : null}
            {dialog?.exchange?.err ? <ExchangeErrorMessage/> : null}
            {dialog?.notifyWhenAvailable?.success ? <NotifyAvailableSuccessMessage/> : null}
            {dialog?.notifyWhenAvailable?.err ? <NotifyAvailableErrorMessage/> : null}
        </div>
    )
}

export default DialogBody