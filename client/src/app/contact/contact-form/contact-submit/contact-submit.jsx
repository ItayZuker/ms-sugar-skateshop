import React from "react"
import { useTranslation } from "../../../../hooks/useTranslation"
import "./contact-submit.scss"

const ContactSubmit = () => {

    /* Global */
    const { translate } = useTranslation()

    /* JSX */
    return (
        <div className="contact-submit-container">
            <input
                className="submit"
                type="submit"
                value={translate("pages.contact.submit")}/>
        </div>
    )
}

export default ContactSubmit