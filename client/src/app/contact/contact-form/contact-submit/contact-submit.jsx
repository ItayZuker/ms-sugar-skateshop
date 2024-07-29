import React from "react"
import { useTranslation } from "../../../../hooks/useTranslation"
import "./contact-submit.scss"

const ContactSubmit = () => {

    /* Global */
    const { t } = useTranslation()

    /* JSX */
    return (
        <div className="contact-submit-container">
            <input
                aria-label={t("pages.contact.submit_button.aria_label")}
                className="submit"
                type="submit"
                value={t("pages.contact.submit_button.title")}/>
        </div>
    )
}

export default ContactSubmit