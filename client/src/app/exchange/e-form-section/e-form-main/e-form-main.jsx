import React, { useContext } from "react"
import EFormTitle from "./e-form-title/e-form-title"
import EFormMessage from "./e-form-message/e-form-message"
import EFormIAgree from "./e-form-i-agree/e-form-i-agree"
import EFormTextDir from "./e-form-text-dir/e-form-text-dir"
import EFormEmail from "./e-form-email/e-form-email"
import EFormName from "./e-form-name/e-form-name"
import EFormSubmit from "./e-form-submit/e-form-submit"
import "./e-form-main.scss"
import { GlobalContext } from "../../../../context/global"

const EFormMain = ({ iAgree, setIagree, textDir, setTextDir, data, dialog }) => {

    /* Global */
    const {
        media
    } = useContext(GlobalContext)

    /* JSX */
    return (
        <div className="e-form-main-container">
            {media.type !== "mobile" && <EFormTitle/>}
            {media.type !== "mobile" && <EFormMessage/>}
            {media.type !== "mobile" && <EFormIAgree
                                            data={data}
                                            dialog={dialog}
                                            setIagree={setIagree}
                                            iAgree={iAgree}/>}
            {media.type !== "mobile" && <EFormTextDir
                                            textDir={textDir}
                                            setTextDir={setTextDir}/>}
            <EFormName
                data={data}
                dialog={dialog}/>
            <EFormEmail
                data={data}
                dialog={dialog}/>
            {media.type === "mobile" && <EFormIAgree
                                            data={data}
                                            dialog={dialog}
                                            setIagree={setIagree}
                                            iAgree={iAgree}/>}
            <EFormSubmit
                data={data}
                dialog={dialog}/>
        </div>
    )
}

export default EFormMain