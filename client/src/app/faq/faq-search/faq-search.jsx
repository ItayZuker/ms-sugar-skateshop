import React from "react"
import "./faq-search.scss"

const FAQSearch = ({ setString }) => {

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
                placeholder="Question here..."/>
        </div>
    )
}

export default FAQSearch