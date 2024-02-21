import React from "react"
import "./e-form-name.scss"

const EFormName = ({ data, dialog }) => {

    /* JSX */
    return (
        <div className="e-form-name-container">
            <input
                className={"name " +
                    (data.name.error ? "error " : "") +
                    (dialog?.exchange?.loading ? "loading " : "")}
                name="name"
                type="text"
                placeholder="*yourname"/>
        </div>
    )
}

export default EFormName