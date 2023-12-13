import React from "react"
import ErrorHeder from "./error-heder/error-heder"
import ErrorBody from "./error-body/error-body"
import "./error-message.scss"

const ErrorMessage = () => {

    /* JSX */
    return (
        <div className="error-message-container">
            <ErrorHeder/>
            <ErrorBody/>
        </div>
    )
}

export default ErrorMessage