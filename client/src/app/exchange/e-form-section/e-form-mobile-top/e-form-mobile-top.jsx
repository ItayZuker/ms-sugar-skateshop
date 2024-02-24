import React from "react"
import "./e-form-mobile-top.scss"

const EFormMobileTop = ({ exchangeMessage }) => {

    /* JSX */
    return (
        <div className="e-form-mobile-top-container">
            <p>{exchangeMessage}</p>
        </div>
    )
}

export default EFormMobileTop