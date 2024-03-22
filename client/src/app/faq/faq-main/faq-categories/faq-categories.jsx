import React from "react"
import FAQCategory from "./faq-category/faq-category"
import "./faq-categories.scss"

const FAQCategories = ({ categories }) => {

    /* JSX */
    return (
        <div className="faq-categories-container">
            {categories.map((category, i) => {
                return <FAQCategory key={i} category={category}/>
            })}
        </div>
    )
}

export default FAQCategories