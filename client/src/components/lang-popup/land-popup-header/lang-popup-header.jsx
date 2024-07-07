import React from "react"
import LangAbort from "./lang-abort/lang-abort"
import "./lang-popup-header.scss"

const LangPopupHeader = () => {

    /* JSX */
    return (
        <div className="lang-popup-header-container">
            <LangAbort/>
        </div>
    )
}

export default LangPopupHeader