import React from "react"
import { useTranslation } from "../../../../../hooks/useTranslation"
import "./e-form-message.scss"

const EFormMessage = () => {

    /* Global */
    const { t } = useTranslation()

    /* JSX */
    return (
        <div className="e-form-message-container">
            <p>{t("pages.exchange.page_content")}</p>
        </div>
    )
}

export default EFormMessage