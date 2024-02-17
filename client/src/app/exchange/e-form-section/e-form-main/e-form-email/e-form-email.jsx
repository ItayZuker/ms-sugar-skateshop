import React from "react"
import "./e-form-email.scss"

const EFormEmail = () => {

    /* JSX */
    return (
        <div className="e-form-email-container">
            <input
                className="email"
                name="email"
                type="email"
                placeholder="example@email.com"/>
        </div>
    )
}

export default EFormEmail