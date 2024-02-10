import React from "react"
import EFormTitle from "./e-form-title/e-form-title"
import EFormMessage from "./e-form-message/e-form-message"
import EFormIAgree from "./e-form-i-agree/e-form-i-agree"
import "./e-form-main.scss"

const EFormMain = () => {

    /* JSX */
    return (
        <div className="e-form-main-container">
            <EFormTitle/>
            <EFormMessage/>
            <EFormIAgree/>
            {/* // choose text direction| */}
        </div>
    )
}

export default EFormMain