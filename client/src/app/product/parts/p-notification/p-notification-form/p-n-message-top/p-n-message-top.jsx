import React from "react"
import { useTranslation } from "../../../../../../hooks/useTranslation"
import "./p-n-message-top.scss"

const PNMessageTop = () => {

    /* Global */
    const { t } = useTranslation()

    /* JSX */
    return (
        <div className="p-n-message-top-container">
            <p>{t("pages.product.notify_popup.message_top")}</p>
        </div>
    )
}

export default PNMessageTop