import React from "react"
import "./faq-category.scss"

const FAQCategory = ({ category }) => {

    /* JSX */
    return (
        <div className="faq-category-container">
            <p>{category}</p>
        </div>
    )
}

export default FAQCategory