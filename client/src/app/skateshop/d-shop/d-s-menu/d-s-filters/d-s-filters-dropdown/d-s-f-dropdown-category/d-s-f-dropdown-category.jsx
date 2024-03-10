import React, { useContext } from "react"
import { ShopifyContext } from "../../../../../../../context/shopify"
import "./d-s-f-dropdown-category.scss"

const DSFDropdownCategory = ({ cat, setDropdownOpen }) => {

    /* JSX */
    const { storeDisplay, updateCollectionDisplay } = useContext(ShopifyContext)
    
    /* Functions */
    const handlePointerDown = () => {
        setDropdownOpen(false)
        updateCollectionDisplay({ selected: cat.title, resetOption: false })
    }

    /* JSX */
    return (
        <div
            onClick={handlePointerDown}
            className={"d-s-f-dropdown-category-container " + (storeDisplay?.collection?.selected.toLowerCase() === cat.title.toLowerCase() ? "selected" : "")}>
            <p>{cat.title}</p>
        </div>
    )
}

export default DSFDropdownCategory