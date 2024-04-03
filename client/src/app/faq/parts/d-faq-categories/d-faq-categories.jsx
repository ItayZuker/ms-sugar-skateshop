import React from "react"
import DFAQAllCategories from "./d-faq-all-categories/d-faq-all-categories"
import DFAQCategory from "./d-faq-category/d-faq-category"
import "./d-faq-categories.scss"

const DFAQCategories = ({ categories }) => {

    /* JSX */
    return (
        <div className="d-faq-categories-container">
            <DFAQAllCategories/>
            {categories?.map((item, i) => {
                return <DFAQCategory key={i} item={item}/>
            })}
        </div>
    )
}

export default DFAQCategories