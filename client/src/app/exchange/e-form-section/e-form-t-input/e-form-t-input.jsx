import React from "react"
import "./e-form-t-input.scss"

const EFormTInput = ({ value, onChange, formData }) => {


    /* JSX */
    return (
        <div className="e-form-t-input-container">
            <textarea
                className={formData.textDirection === "rtl" ? "dir-rtl" : "dir-ltr"}
                name="message"
                placeholder="Write here..."
                value={value}
                onChange={onChange}            />
        </div>
    )
}

export default EFormTInput