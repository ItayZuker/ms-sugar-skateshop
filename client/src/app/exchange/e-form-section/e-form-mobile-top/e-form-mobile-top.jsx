import React from "react"
import { useTranslation } from "../../../../hooks/useTranslation"
import "./e-form-mobile-top.scss"

const EFormMobileTop = () => {

    /* Global */
    const { translate } = useTranslation()

    /* JSX */
    return (
        <div className="e-form-mobile-top-container">
            <p>{translate("pages.exchange.message_content")}</p>
        </div>
    )
}

export default EFormMobileTop