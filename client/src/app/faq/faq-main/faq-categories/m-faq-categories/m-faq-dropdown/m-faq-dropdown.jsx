import React from "react"
import MFAQDropCat from "./m-faq-drop-cat/m-faq-drop-cat"
import "./m-faq-dropdown.scss"

const MFAQDropdown = ({ categories, dropdownOpen }) => {

    /* JSX */
    return (
        <div className="m-faq-dropdown-container">
            {categories?.map((item, i) => {
                return <MFAQDropCat key={i} item={item}/>
            })}
        </div>
    )
}

export default MFAQDropdown