import React from "react"
import EFormTitle from "./e-form-title/e-form-title"
import EFormMessage from "./e-form-message/e-form-message"
import EFormIAgree from "./e-form-i-agree/e-form-i-agree"
import EFormTextDir from "./e-form-text-dir/e-form-text-dir"
import EFormEmail from "./e-form-email/e-form-email"
import EFormName from "./e-form-name/e-form-name"
import EFormSubmit from "./e-form-submit/e-form-submit"
import "./e-form-main.scss"

const EFormMain = ({ iAgree, setIagree, textDir, setTextDir, data, dialog }) => {

    /* JSX */
    return (
        <div className="e-form-main-container">
            {/* <EFormTitle/> */}
            <EFormMessage/>
            <EFormIAgree
                data={data}
                dialog={dialog}
                setIagree={setIagree}
                iAgree={iAgree}/>
            {/* text direction */}
            <EFormTextDir
                textDir={textDir}
                setTextDir={setTextDir}/>
            {/* name */}
            <EFormName/>
            <EFormEmail
                data={data}
                dialog={dialog}/>
            <EFormSubmit
                data={data}
                dialog={dialog}/>
        </div>
    )
}

export default EFormMain