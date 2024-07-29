import React from "react"
import { useTranslation } from "../../../hooks/useTranslation"
import "./contact-title.scss"

const ContactTitle = () => {

    /* Global */
    const { t } = useTranslation()

    /* JSX */
    return (
        <div className="contact-title-container">
            <h3>{t("pages.contact.page_title")}</h3>
        </div>
    )
}

export default ContactTitle