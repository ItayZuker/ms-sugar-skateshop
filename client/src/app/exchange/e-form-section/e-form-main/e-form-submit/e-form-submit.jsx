import React from "react"
import "./e-form-submit.scss"

const EFormSubmit = ({ data }) => {

    /* JSX */
    return (
        <div className="e-form-submit-container">
            <input
                type="submit"
                className={"submit " +
                    (data.text.error ? "error " : "")}
                value="Send"/>
        </div>
    )
}

export default EFormSubmit