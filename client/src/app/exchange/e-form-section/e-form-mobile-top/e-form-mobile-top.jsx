import React from "react"
import { useTranslation } from "../../../../hooks/useTranslation"
import "./e-form-mobile-top.scss"

const EFormMobileTop = () => {

    /* Global */
    const { t } = useTranslation()

    /* JSX */
    return (
        <div className="e-form-mobile-top-container">
            <p>{t("pages.exchange.message_content")}</p>
        </div>
    )
}

export default EFormMobileTop