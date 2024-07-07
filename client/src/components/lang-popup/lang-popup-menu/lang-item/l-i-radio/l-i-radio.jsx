import React, { useContext } from "react"
import { LanguageContext } from "../../../../../context/language"
import "./l-i-radio.scss"

const LIRadio = ({ langCode }) => {

    /* Global */
    const { lang } = useContext(LanguageContext)

    /* JSX */
    return (
        <div className={"l-i-radio-container " + (lang === langCode ? "active" : "")}>

        </div>
    )
}

export default LIRadio