import React from "react"
import { useMedia } from "../../../../hooks/useMedia"
import EFormTitle from "./e-form-title/e-form-title"
import EFormMessage from "./e-form-message/e-form-message"
import EFormIAgree from "./e-form-i-agree/e-form-i-agree"
import EFormTextDir from "./e-form-text-dir/e-form-text-dir"
import EFormEmail from "./e-form-email/e-form-email"
import EFormName from "./e-form-name/e-form-name"
import EFormSubmit from "./e-form-submit/e-form-submit"
import "./e-form-main.scss"

const EFormMain = ({ iAgree, setIagree, textDir, setTextDir, data }) => {

    /* Global */
    const { media } = useMedia()

    /* JSX */
    return (
        <div className="e-form-main-container">
            { media.type !== "mobile" && <EFormTitle/>}
            { media.type !== "mobile" && <EFormMessage/>}
            { media.type !== "mobile" && <EFormTextDir
                                            textDir={textDir}
                                            setTextDir={setTextDir}/>}
            <EFormName 
                data={data}/>
            <EFormEmail
                data={data}/>
            { media.type === "mobile" && <EFormIAgree
                                            data={data}
                                            setIagree={setIagree}
                                            iAgree={iAgree}/> }
            { media.type !== "mobile" && <EFormIAgree
                                            data={data}
                                            setIagree={setIagree}
                                            iAgree={iAgree}/> }
            <EFormSubmit
                data={data}/>
        </div>
    )
}

export default EFormMain