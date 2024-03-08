import React from "react"
import { Link } from "react-router-dom"
import "./notify-available-success-message.scss"

const NotifyAvailableSuccessMessage = () => {

    /* JSX */
    return (
        <div className="notify-available-success-message-container">
            <h2>Great!</h2>
            <p>Make sure you got the confirmation to your Email. And here is an idea: Go to <Link to="/exchange">Exchange page</Link> to get a 10% discount.</p>
        </div>
    )
}

export default NotifyAvailableSuccessMessage