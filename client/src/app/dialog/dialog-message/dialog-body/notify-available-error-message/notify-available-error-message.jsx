import React, { useContext } from "react"
import { GlobalContext } from "../../../../../context/global"
import { useTranslation } from "../../../../../hooks/useTranslation"
import "./notify-available-error-message.scss"

const NotifyAvailableErrorMessage = () => {

    /* Global */
    const { dialog } = useContext(GlobalContext)
    const { t } = useTranslation()

    /* Locale */
    const title = dialog?.notifyWhenAvailable?.res?.err?.title
    const body = dialog?.notifyWhenAvailable?.res?.err?.body

    console.log("title: ", title)
    /* JSX */
    return (
        <div className="notify-available-error-message-container">
            { title && <h2>{t(title)}</h2>}
            { body && <p>{t(body)}</p>}
        </div>
    )
}

export default NotifyAvailableErrorMessage