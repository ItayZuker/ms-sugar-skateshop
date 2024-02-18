import React from "react"
import "./e-form-email.scss"

const EFormEmail = ({ data, dialog }) => {

    /* JSX */
    return (
        <div className="e-form-email-container">
            <input
                className={"email " +
                    (data?.email?.error ? "error " : "") +
                    (dialog?.exchange?.loading ? "loading " : "")}
                name="email"
                type="email"
                placeholder="*example@email.com"/>
        </div>
    )
}

export default EFormEmail