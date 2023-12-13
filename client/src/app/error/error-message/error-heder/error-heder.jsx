import React from "react"
import CloseErrorMessageButton from "./close-error-message-button/close-error-message-button"
import "./error-heder.scss"

const ErrorHeder = () => {

    /* JSX */
    return (
        <div className="error-heder-container">
            <CloseErrorMessageButton/>
        </div>
    )
}

export default ErrorHeder