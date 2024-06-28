import React from "react"
import { useTranslation } from "../../../../../hooks/useTranslation"
import "./e-form-message.scss"

const EFormMessage = () => {

    /* Global */
    const { translate } = useTranslation()

    /* JSX */
    return (
        <div className="e-form-message-container">
            <p>{translate("pages.exchange.message_content")}</p>
        </div>
    )
}

export default EFormMessage