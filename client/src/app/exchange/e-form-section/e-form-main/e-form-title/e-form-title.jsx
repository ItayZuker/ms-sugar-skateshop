import React from "react"
import { useTranslation } from "../../../../../hooks/useTranslation"
import "./e-form-title.scss"

const EFormTitle = () => {

    /* Global */
    const { translate } = useTranslation()

    /* JSX */
    return (
        <div className="e-form-title-container">
            <h3>{translate("pages.exchange.message_title")}</h3>
        </div>
    )
}

export default EFormTitle