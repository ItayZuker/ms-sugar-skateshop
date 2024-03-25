import React from "react"
import MFAQCatItem from "./m-faq-cat-item/m-faq-cat-item"
import "./m-faq-categories-drop.scss"

const MFAQCategoriesDrop = ({ categories, dropdownOpen }) => {

    /* JSX */
    return (
        <div className={"m-faq-categories-drop-container " + (dropdownOpen ? "open" : "")}>
            {categories?.map((item, i) => {
                return <MFAQCatItem key={i} item={item}/>
            })}
        </div>
    )
}

export default MFAQCategoriesDrop