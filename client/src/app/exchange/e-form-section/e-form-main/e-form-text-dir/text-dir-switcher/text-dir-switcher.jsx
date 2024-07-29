import React, { useContext, useEffect } from "react"
import { LanguageContext } from "../../../../../../context/language"
import { useTranslation } from "../../../../../../hooks/useTranslation"
import "./text-dir-switcher.scss"

const TextDirSwitcher = ({ textDir, setTextDir }) => {

    /* Global */
    const { lang } = useContext(LanguageContext)
    const { t } = useTranslation()

    /* Triggers */
    useEffect(() => {
        updateRTL()
    }, [lang])

    /* Functions */
    const updateRTL = () => {
        setTextDir(lang === "he" ? "rtl" : "ltr")
            
    }
    const toggleRTL = () => {
        setTextDir(prev => prev === "rtl" ? "ltr" : "rtl")
    }

    /* JSX */
    return (
        <button
            type="button"
            className="text-dir-switcher-container"
            onPointerDown={toggleRTL}
            onKeyDown={(e) => e.key === 'Enter' && toggleRTL()}>
            <div className="text-dir-switcher-inner-container">
                <span
                    role="button"
                    tabIndex="0"
                    aria-label={t("pages.exvhange.dir_input.aria_label_ltr")}
                    className={"material-symbols-outlined dir-ltr " + (textDir === "ltr" ? "active" : "")}>align_horizontal_left</span>
                <span
                    role="button"
                    tabIndex="0"
                    aria-label={t("pages.exvhange.dir_input.aria_label_rtl")}
                    className={"material-symbols-outlined dir-rtl " + (textDir === "rtl" ? "active" : "")}>align_horizontal_right</span>
            </div>
        </button>
    )
}

export default TextDirSwitcher