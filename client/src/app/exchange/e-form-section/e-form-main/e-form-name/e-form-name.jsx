import React from "react"
import "./e-form-name.scss"

const EFormName = ({ data }) => {

    /* JSX */
    return (
        <div className="e-form-name-container">
            <input
                className={"name " + (data.name.error ? "error " : "")}
                name="name"
                type="text"
                placeholder={data.name.placeholder}/>
        </div>
    )
}

export default EFormName