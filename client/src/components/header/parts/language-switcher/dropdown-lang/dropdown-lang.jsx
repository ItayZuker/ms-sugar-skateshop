import React, { useContext } from "react"
import { LanguageContext } from "../../../../../context/language"
import EnFlag from "../flags/en"
import HeFlag from "../flags/he"
import "./dropdown-lang.scss"

const DropdownLang = ({ hover, setHover }) => {

    /* Global */
    const { lang, updateLang } = useContext(LanguageContext)

    /* Locale */
    const languages = [
        { code: "en", component: EnFlag },
        { code: "he", component: HeFlag }
    ]

    /* Functions */
    const unselectedLanguages = languages.filter(language => language.code !== lang)

    /* JSX */
    return (
        <ul className={"dropdown-lang-container " + (hover ? "hovering-switcher" : "")}>
            {unselectedLanguages.map(language => (
                <li
                    key={language.code}
                    onClick={() => {
                        updateLang({ lang: language.code})
                        setHover(false)
                    }}>
                    <language.component/>
                </li>
            ))}
        </ul>
    )
}

export default DropdownLang