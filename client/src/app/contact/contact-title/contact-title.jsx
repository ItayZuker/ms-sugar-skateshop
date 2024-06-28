import React from "react"
import { useTranslation } from "../../../hooks/useTranslation"
import "./contact-title.scss"

const ContactTitle = () => {

    /* Global */
    const { translate } = useTranslation()
    /* JSX */
    return (
        <div className="contact-title-container">
            <h3>{translate("pages.contact.message_title")}</h3>
        </div>
    )
}

export default ContactTitle