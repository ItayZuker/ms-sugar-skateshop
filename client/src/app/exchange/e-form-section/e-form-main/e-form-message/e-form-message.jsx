import React from "react"
import "./e-form-message.scss"

const EFormMessage = ({ exchangeMessage }) => {

    /* JSX */
    return (
        <div className="e-form-message-container">
            <p>{exchangeMessage}</p>
        </div>
    )
}

export default EFormMessage