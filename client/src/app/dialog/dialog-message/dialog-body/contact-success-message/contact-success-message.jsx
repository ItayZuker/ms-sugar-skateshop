import React from "react"
import { useTranslation } from "../../../../../hooks/useTranslation"
import "./contact-success-message.scss"

const ContactSuccessMessage = () => {

    /* Global */
    const { t } = useTranslation()

    /* JSX */
    return (
        <div className="contact-success-message-container">
            <h2>{t("dialog.contact_success.title")}</h2>
            <p>{t("dialog.contact_success.message")}</p>
        </div>
    )
}

export default ContactSuccessMessage