import React from "react"
import EnFlag from "./flags/en"
import HeFlag from "./flags/he"
import LangItem from "./lang-item/lang-item"
import "./lang-popup-menu.scss"

const LangPopupMenu = () => {

    const languages = [
        { code: "he", title: "עברית", component: HeFlag },
        { code: "en", title: "English", component: EnFlag }
    ]

    /* JSX */
    return (
        <ul className="lang-popup-menu-container">
            {languages.map((lang, i) => {
                return <LangItem key={i} lang={lang}/>
            })}
        </ul>
    )
}

export default LangPopupMenu