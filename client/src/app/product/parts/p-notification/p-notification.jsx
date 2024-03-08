import React from "react"
import PNotificationHeader from "./p-notification-header/p-notification-header"
import PNotificationForm from "./p-notification-form/p-notification-form"
import "./p-notification.scss"

const PNotification = ({ notifyWhenAvailable, setNotifyWhenAvailable }) => {

    /* Function */
    const handleClick = () => {
        setNotifyWhenAvailable(false)
    }

    /* JSX */
    if (notifyWhenAvailable) {
        return (
            <div className="p-notification-container">
                <div className="p-notification-inner-container">
                    <PNotificationHeader
                        setNotifyWhenAvailable={setNotifyWhenAvailable}/>
                    <PNotificationForm
                        setNotifyWhenAvailable={setNotifyWhenAvailable}/>
                </div>
                <div
                    onClick={handleClick}
                    className="p-notification-cover">
                </div>
            </div>
        )
    }
}

export default PNotification