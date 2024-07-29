import React from "react"
import { useTranslation } from "../../../hooks/useTranslation"
import "./faq-search.scss"

const FAQSearch = ({ setString }) => {

    /* Global */
    const { t } = useTranslation()

    /* Functions */
    const handleChange = (e) => {
        setString(e.target.value)
    }

    /* JSX */
    return (
        <div className="faq-search-container">
            <input
                aria-label={t("pages.faq.search_input.aria_label")}
                onChange={handleChange}
                name="faq"
                type="text"
                placeholder={t("pages.faq.search_input.placeholder")}/>
        </div>
    )
}

export default FAQSearch