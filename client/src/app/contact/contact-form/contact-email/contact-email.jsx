import React from "react"
import { useTranslation } from "../../../../hooks/useTranslation"
import "./contact-email.scss"

const ContactEmail = ({ data }) => {

    /* Global */
    const { t } = useTranslation()

    /* JSX */
    return (
        <div className="contact-email-container">
            <input
                aria-label={t("pages.contact.email_input.aria_label")}
                className={"email " + (data.email.error ? "error" : "")}
                name="email"
                type="email"
                placeholder={t("pages.contact.email_input.placeholder")}/>
        </div>
    )
}

export default ContactEmail