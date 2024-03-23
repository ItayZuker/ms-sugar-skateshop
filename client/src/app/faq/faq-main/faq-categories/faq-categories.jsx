import React from "react"
import FAQCategory from "./faq-category/faq-category"
import FAQContact from "../faq-contact/faq-contact"
import "./faq-categories.scss"

const FAQCategories = ({ categories }) => {

    /* JSX */
    return (
        <div className="faq-categories-container">
            {categories?.map((item, i) => {
                return <FAQCategory key={i} item={item}/>
            })}
        </div>
    )
}

export default FAQCategories