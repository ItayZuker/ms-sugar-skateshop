import React from "react"
import { useTranslation } from "../../../../../hooks/useTranslation"
import "./exchange-success-message.scss"

const ExchangeSuccessMessage = () => {

    /* Global */
    const { t } = useTranslation()

    /* JSX */
    return (
        <div className="exchange-success-message-container">
            <h2>{t("dialog.exchange_success.title")}</h2>
            <p>{t("dialog.exchange_success.message")}</p>
        </div>
    )
}

export default ExchangeSuccessMessage