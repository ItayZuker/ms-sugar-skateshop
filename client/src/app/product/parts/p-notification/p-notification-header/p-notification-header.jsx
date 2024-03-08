import React from "react"
import PNAbort from "./p-n-abort/p-n-abort"
import "./p-notification-header.scss"

const PNotificationHeader = ({ setNotifyWhenAvailable }) => {

    /* JSX */
    return (
        <div className="p-notification-header-container">
            <PNAbort setNotifyWhenAvailable={setNotifyWhenAvailable}/>
        </div>
    )
}

export default PNotificationHeader