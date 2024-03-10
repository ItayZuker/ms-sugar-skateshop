import React, { useContext } from "react"
import { GlobalContext } from "../../../../../context/global"
import "./notify-available-error-message.scss"

const NotifyAvailableErrorMessage = () => {

    /* Global */
    const { dialog } = useContext(GlobalContext)

    /* JSX */
    return (
        <div className="notify-available-error-message-container">
            <h2>{dialog?.notifyWhenAvailable?.res?.err?.title}</h2>
            <p>{dialog?.notifyWhenAvailable?.res?.err?.body}</p>
        </div>
    )
}

export default NotifyAvailableErrorMessage