import React from "react"
import "./e-form-t-input.scss"

const EFormTInput = ({ value, onChange }) => {


    /* JSX */
    return (
        <div className="e-form-t-input-container">
            <textarea
                name="message"
                placeholder="Write here..."
                value={value}
                onChange={onChange}            />
        </div>
    )
}

export default EFormTInput