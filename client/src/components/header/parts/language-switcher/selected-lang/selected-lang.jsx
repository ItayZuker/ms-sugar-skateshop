import React, { useContext } from "react"
import { LanguageContext } from "../../../../../context/language"
import EnFlag from "../flags/en"
import HeFlag from "../flags/he"
import "./selected-lang.scss"

const SelectedLang = ({ hover, handleMouseEnter }) => {

    /* Global */
    const { lang } = useContext(LanguageContext)

    /* JSX */
    return (
        <div
            className={"selected-lang-container " + (hover ? "hovering-switcher" : "")}
            onMouseEnter={handleMouseEnter}>
            {lang === "en" && <EnFlag />}
            {lang === "he" && <HeFlag />}
        </div>
    )
}

export default SelectedLang