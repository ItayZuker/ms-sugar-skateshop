import React from "react"
import "./p-notification.scss"

const PNotification = ({ setNotifyWhenAvailable,  }) => {

    /* Functions */
    const handleClick = () => {
        setNotifyWhenAvailable(true)
    }

    /* JSX */
    return (
        <div
            onClick={handleClick}
            className="p-notification-container">
            <p>Notify me when available</p>
        </div>
    )
}

export default PNotification