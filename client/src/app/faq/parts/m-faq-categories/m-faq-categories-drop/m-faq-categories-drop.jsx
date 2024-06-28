import React from "react"
import MFAQCatItem from "./m-faq-cat-item/m-faq-cat-item"
import MFAQAllCategories from "./m-faq-all-categories/m-faq-all-categories"
import "./m-faq-categories-drop.scss"

const MFAQCategoriesDrop = ({ categories, dropdownOpen }) => {

    /* JSX */
    return (
        <div className={"m-faq-categories-drop-container " + (dropdownOpen ? "open" : "")}>
            <MFAQAllCategories/>
            {categories?.map((item, i) => {
                return <MFAQCatItem key={i} item={item}/>
            })}
        </div>
    )
}

export default MFAQCategoriesDrop