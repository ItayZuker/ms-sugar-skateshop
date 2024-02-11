import React from "react"
import EFormTitle from "./e-form-title/e-form-title"
import EFormMessage from "./e-form-message/e-form-message"
import EFormIAgree from "./e-form-i-agree/e-form-i-agree"
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
            {/* choose text direction| */}
            {/* name */}
            {/* email */}
            <EFormSubmit/>
        </div>
    )
}

export default EFormMain