import React, { useContext } from "react"
import { ShopifyContext } from "../../../../../context/shopify"
import "./m-s-selected-cat.scss"

const MSSelectedCat = ({ hanbleCategoriesClick, dropdownOpen }) => {

    /* Global */
    const { storeDisplay } = useContext(ShopifyContext)

    /* JSX */
    return (
        <div
            onClick={hanbleCategoriesClick}
            className={"m-s-selected-cat-container " + (dropdownOpen ? "open" : '')}>
            <span className="material-symbols-outlined">storefront</span>
            <p>{storeDisplay?.collection?.selected}</p>
            <div className="arrow-container">
                <span className="material-symbols-outlined">expand_more</span>
            </div>
        </div>
    )
}

export default MSSelectedCat