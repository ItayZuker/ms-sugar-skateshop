import React from "react"
import "./e-form-email.scss"

const EFormEmail = ({ data }) => {

    /* JSX */
    return (
        <div className="e-form-email-container">
            <input
                className={"email " + (data?.email?.error ? "error " : "")}
                name="email"
                type="email"
                placeholder="*example@email.com"/>
        </div>
    )
}

export default EFormEmail