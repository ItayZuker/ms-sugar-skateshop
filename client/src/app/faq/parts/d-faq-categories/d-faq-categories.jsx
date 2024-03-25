import React from "react"
import DFAQCategory from "./d-faq-category/d-faq-category"
import "./d-faq-categories.scss"

const DFAQCategories = ({ categories }) => {

    /* JSX */
    return (
        <div className="d-faq-categories-container">
            {categories?.map((item, i) => {
                return <DFAQCategory key={i} item={item}/>
            })}
        </div>
    )
}

export default DFAQCategories