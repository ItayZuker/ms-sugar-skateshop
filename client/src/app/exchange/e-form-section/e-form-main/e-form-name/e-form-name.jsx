import React from "react"
import "./e-form-name.scss"

const EFormName = () => {

    /* JSX */
    return (
        <div className="e-form-name-container">
            <input
                className="name"
                name="name"
                type="text"
                placeholder="yourname"/>
        </div>
    )
}

export default EFormName