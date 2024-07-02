import React from "react"
import { useParams } from "react-router-dom"
import { useTranslation } from "../../../../../hooks/useTranslation"
import "./m-faq-selected-cat.scss"

const MFAQSelectedCat = ({ hanbleCategoriesClick, dropdownOpen }) => {

    /* Global */
    const { category } = useParams()
    const { translate } = useTranslation()

    /* JSX */
    return (
        <div
            onClick={hanbleCategoriesClick}
            className={"m-faq-selected-cat-container " + (dropdownOpen ? "open" : '')}>
            <p>{ category || translate("pages.faq.all") }</p>
            <div className="arrow-container">
                <span className="material-symbols-outlined">expand_more</span>
            </div>
        </div>
    )
}

export default MFAQSelectedCat