import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useScroll } from "../../../../hooks/useScroll"
import MFAQSelectedCat from "./m-faq-selected-cat/m-faq-selected-cat"
import MFAQCategoriesDrop from "./m-faq-categories-drop/m-faq-categories-drop"
import "./m-faq-categories.scss"

const MFAQCategories = ({ categories }) => {

    /* Global */
    const { category } = useParams()
    const { scroll } = useScroll()

    /* Locale */
    const [dropdownOpen, setDropdownOpen] = useState(false)

    /* Triggers */
    useEffect(() => {
        updateDropdownOpen()
    }, [category])
    
    /* Functions */
    const updateDropdownOpen = () => {
        setDropdownOpen(false)
    }

    const hanbleCategoriesClick = () => {
        setDropdownOpen(prev => !prev)
    }

    /* JSX */
    return (
        <div className={"m-faq-categories-container " + (scroll?.direction === "down" ? "scroll-down" : "scroll-up")}>
            <div className="m-faq-categories-inner-container">
                <MFAQSelectedCat
                    dropdownOpen={dropdownOpen}
                    hanbleCategoriesClick={hanbleCategoriesClick}/>
                <MFAQCategoriesDrop
                    dropdownOpen={dropdownOpen}
                    categories={categories}/>
            </div>
        </div>
    )
}

export default MFAQCategories