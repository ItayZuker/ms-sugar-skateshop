import React from "react"
import { useTranslation } from "../../../../../hooks/useTranslation"
import "./m-t-selected-cat.scss"

const MTSelectedCat = ({ hanbleCategoriesClick, dropdownOpen }) => {

    /* Global */
    const { translate } = useTranslation()

    /* JSX */
    return (
        <div
            onClick={hanbleCategoriesClick}
            className={"m-t-selected-cat-container " + (dropdownOpen ? "open" : '')}>
            <h3>{translate("pages.terms.section_main_title")}</h3>
            <div className="arrow-container">
                <span className="material-symbols-outlined">expand_more</span>
            </div>
        </div>
    )
}

export default MTSelectedCat