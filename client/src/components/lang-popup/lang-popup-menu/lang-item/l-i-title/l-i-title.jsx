import React, { useContext } from "react"
import { LanguageContext } from "../../../../../context/language"
import "./l-i-title.scss"

const LITitle = ({ langCode, title }) => {

    /* Global */
    const { lang } = useContext(LanguageContext)

    /* JSX */
    return (
        <div className={"l-i-title-container " + (langCode === lang ? "active" : "")}>
            <p>{title}</p>
        </div>
    )
}

export default LITitle