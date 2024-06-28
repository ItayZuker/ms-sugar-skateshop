import React from "react"
import { useParams } from "react-router-dom"
import "./m-faq-selected-cat.scss"

const MFAQSelectedCat = ({ hanbleCategoriesClick, dropdownOpen }) => {

    /* Global */
    const { category } = useParams()

    /* JSX */
    return (
        <div
            onClick={hanbleCategoriesClick}
            className={"m-faq-selected-cat-container " + (dropdownOpen ? "open" : '')}>
            <p>{ category || "All" }</p>
            <div className="arrow-container">
                <span className="material-symbols-outlined">expand_more</span>
            </div>
        </div>
    )
}

export default MFAQSelectedCat