import React, { useContext } from "react"
import { LanguageContext } from "../../../../context/language"
import LIRadio from "./l-i-radio/l-i-radio"
import LITitle from "./l-i-title/l-i-title"
import "./lang-item.scss"

const LangItem = ({ lang }) => {

    /* Global */
    const { updateLang } = useContext(LanguageContext)

    /* Functions */
    const handleClick = () => {
        updateLang({ lang: lang.code })
    }

    /* JSX */
    return (
        <li
            className="lang-item-container"
            onClick={handleClick}>
            <LIRadio langCode={lang.code}/>
            <lang.component/>
            <LITitle langCode={lang.code} title={lang.title}/>
        </li>
    )
}

export default LangItem