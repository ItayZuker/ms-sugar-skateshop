import React from "react"
import { useTranslation } from "../../../../../hooks/useTranslation"
import "./e-form-email.scss"

const EFormEmail = ({ data }) => {

    /* Global */
    const { t } = useTranslation()

    /* JSX */
    return (
        <div className="e-form-email-container">
            <input
                aria-label={t("pages.exchange.email_input.aria_label")}
                className={"email " + (data?.email?.error ? "error " : "")}
                name="email"
                type="email"
                placeholder={t("pages.exchange.email_input.placeholder")}/>
        </div>
    )
}

export default EFormEmail