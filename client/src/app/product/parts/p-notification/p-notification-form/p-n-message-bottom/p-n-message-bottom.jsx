import React from "react"
import { useTranslation } from "../../../../../../hooks/useTranslation"
import "./p-n-message-bottom.scss"

const PNMessageBottom = () => {

    /* Global */
    const { t } = useTranslation()

    /* JSX */
    return (
        <div className="p-n-message-bottom-container">
            <p>{t("pages.product.notify_popup.message_bottom")}</p>
        </div>
    )
}

export default PNMessageBottom