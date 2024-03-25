import React, { useState } from "react"
import { useParams } from "react-router-dom"
import MFAQDropdown from "./m-faq-dropdown/m-faq-dropdown"
import "./m-faq-categories.scss"

const MFAQCategories = ({ categories }) => {

    /* Global */
    const { category } = useParams()

    /* Locale */
    const [dropdownOpen, setDropdownOpen] = useState(false)

    /* JSX */
    return (
        <div className="m-faq-categories-container">
            <div className="m-faq-selected-container">
                <p>{category}</p>
            </div>
            <MFAQDropdown
                categories={categories}
                dropdownOpen={dropdownOpen}/>
        </div>
    )
}

export default MFAQCategories