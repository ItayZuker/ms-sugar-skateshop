import React from "react"
import EFormTitle from "./e-form-title/e-form-title"
import EFormMessage from "./e-form-message/e-form-message"
import EFormIAgree from "./e-form-i-agree/e-form-i-agree"
import EFormEmail from "./e-form-email/e-form-email"
import EFormName from "./e-form-name/e-form-name"
import EFormSubmit from "./e-form-submit/e-form-submit"
import "./e-form-main.scss"

const EFormMain = ({ formData, setFormData }) => {

    /* JSX */
    return (
        <div className="e-form-main-container">
            <EFormTitle/>
            <EFormMessage/>
            <EFormIAgree
                formData={formData}
                setFormData={setFormData}/>
            {/* text direction */}
            {/* name */}
            <EFormName/>
            <EFormEmail/>
            <EFormSubmit/>
        </div>
    )
}

export default EFormMain