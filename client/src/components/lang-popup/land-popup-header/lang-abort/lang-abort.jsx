import React, { useContext } from "react"
import { LanguageContext } from "../../../../context/language"
import "./lang-abort.scss"

const LangAbort = () => {

    /* Global */
    const { setOpenLangPopup } = useContext(LanguageContext)

    /* Functions */
    const handleClick = () => {
        setOpenLangPopup(false)
    }

    /* JSX */
    return (
        <div
            onClick={handleClick}
            className="lang-abort-container">
            <span className="material-symbols-outlined">close</span>
        </div>
    )
}

export default LangAbort