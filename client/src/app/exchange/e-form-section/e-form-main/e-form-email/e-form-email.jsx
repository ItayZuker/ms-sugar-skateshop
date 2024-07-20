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
                aria-label="Email"
                className={"email " + (data?.email?.error ? "error " : "")}
                name="email"
                type="email"
                placeholder={t("pages.exchange.input_email_placeholder")}/>
        </div>
    )
}

export default EFormEmail