import React, { useContext } from "react"
import { GlobalContext } from "../../../../context/global"
import { LanguageContext } from "../../../../context/language"
import { useTranslation } from "../../../../hooks/useTranslation"
import LIRadio from "./l-i-radio/l-i-radio"
import LITitle from "./l-i-title/l-i-title"
import "./lang-item.scss"

const LangItem = ({ lang }) => {

    /* Global */
    const { setIsSideMenuOpen } = useContext(GlobalContext)
    const { updateLang, setOpenLangPopup } = useContext(LanguageContext)
    const { t } = useTranslation()

    /* Functions */
    const handleClick = () => {
        updateLang({ lang: lang.code })
        setOpenLangPopup(false)
        setIsSideMenuOpen(false)
    }

    /* JSX */
    return (
        <li
            aria-label={t(`language.popup.change_to_${lang.code}.aria_label`)}
            className="lang-item-container"
            onClick={handleClick}>
            <LIRadio langCode={lang.code}/>
            <lang.component/>
            <LITitle langCode={lang.code} title={lang.title}/>
        </li>
    )
}

export default LangItem