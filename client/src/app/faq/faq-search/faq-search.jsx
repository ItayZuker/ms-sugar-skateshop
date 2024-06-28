import React from "react"
import { useTranslation } from "../../../hooks/useTranslation"
import "./faq-search.scss"

const FAQSearch = ({ setString }) => {

    /* Global */
    const { translate } = useTranslation()

    /* Functions */
    const handleChange = (e) => {
        setString(e.target.value)
    }

    /* JSX */
    return (
        <div className="faq-search-container">
            <input
                onChange={handleChange}
                name="faq"
                type="text"
                placeholder={translate("pages.faq.search_placeholder")}/>
        </div>
    )
}

export default FAQSearch