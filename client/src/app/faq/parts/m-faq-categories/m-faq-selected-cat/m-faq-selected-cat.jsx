import React from "react"
import { useParams } from "react-router-dom"
import { useTranslation } from "../../../../../hooks/useTranslation"
import "./m-faq-selected-cat.scss"

const MFAQSelectedCat = ({ hanbleCategoriesClick, dropdownOpen }) => {

    /* Global */
    const { category } = useParams()
    const { t } = useTranslation()

    /* JSX */
    return (
        <button
            onClick={hanbleCategoriesClick}
            aria-label={t("pages.faq.category_dropdown.aria_label")}
            className={"m-faq-selected-cat-container " + (dropdownOpen ? "open" : '')}>
            <p>{ category || t("pages.faq.all") }</p>
            <div className="arrow-container">
                <span className="material-symbols-outlined">expand_more</span>
            </div>
        </button>
    )
}

export default MFAQSelectedCat