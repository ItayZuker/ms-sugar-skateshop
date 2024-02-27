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
                placeholder={data.email.placeholder}/>
        </div>
    )
}

export default EFormEmail