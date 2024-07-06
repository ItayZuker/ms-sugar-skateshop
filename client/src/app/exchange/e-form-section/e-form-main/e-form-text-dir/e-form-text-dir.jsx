import React from "react"
import { useTranslation } from "../../../../../hooks/useTranslation"
import TextDirSwitcher from "./text-dir-switcher/text-dir-switcher"
import "./e-form-text-dir.scss"

const EFormTextDir = ({ textDir, setTextDir }) => {

    /* global */
    const { t } = useTranslation()

    /* JSX */
    return (
        <div className="e-form-text-dir-container">
            <p>{t("pages.exchange.text_direction")}</p>
            <TextDirSwitcher
                textDir={textDir}
                setTextDir={setTextDir}/>
        </div>
    )
}

export default EFormTextDir