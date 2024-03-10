import React from "react"
import "./p-notify-me.scss"

const PNotifyMe = ({ setNotifyWhenAvailable }) => {

    /* Functions */
    const handleClick = () => {
        setNotifyWhenAvailable(true)
    }

    /* JSX */
    return (
        <div
            onClick={handleClick}
            className="p-notify-me-container">
            <p>Notify me when available</p>
        </div>
    )
}

export default PNotifyMe