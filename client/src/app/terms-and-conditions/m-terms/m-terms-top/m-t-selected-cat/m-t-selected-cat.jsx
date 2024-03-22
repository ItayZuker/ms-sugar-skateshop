import React from "react"
import "./m-t-selected-cat.scss"

const MTSelectedCat = ({ hanbleCategoriesClick, dropdownOpen }) => {

    /* JSX */
    return (
        <div
            onClick={hanbleCategoriesClick}
            className={"m-t-selected-cat-container " + (dropdownOpen ? "open" : '')}>
            <h3>Terms & Conditions</h3>
            <div className="arrow-container">
                <span className="material-symbols-outlined">expand_more</span>
            </div>
        </div>
    )
}

export default MTSelectedCat