import React from "react"
import "./p-n-email.scss"

const PNEmail = ({ data }) => {

    /* JSX */
    return (
        <div className="p-n-email-container">
            <input
                className={"email " + (data.email.error ? "error" : "")}
                name="email"
                type="email"
                placeholder={data.email.placeholder}/>
        </div>
    )
}

export default PNEmail