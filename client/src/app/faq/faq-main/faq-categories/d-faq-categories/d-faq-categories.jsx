import React from "react"
import FAQCategory from "./faq-category/faq-category"
import "./d-faq-categories.scss"

const DFAQCategories = ({ categories }) => {

    /* JSX */
    return (
        <div className="d-faq-categories-container">
            {categories?.map((item, i) => {
                return <FAQCategory key={i} item={item}/>
            })}
        </div>
    )
}

export default DFAQCategories