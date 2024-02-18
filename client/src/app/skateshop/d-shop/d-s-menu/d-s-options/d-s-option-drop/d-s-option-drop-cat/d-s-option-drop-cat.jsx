import React, { useContext } from "react"
import { ShopifyContext } from "../../../../../../../context/shopify"
import "./d-s-option-drop-cat.scss"

const DSOptionDropCat = ({ cat }) => {

    /* JSX */
    const {
        storeDisplay,
        updateCollectionDisplay
    } = useContext(ShopifyContext)
    
    /* Functions */
    const handlePointerDown = () => {
        updateCollectionDisplay({ selected: cat.title, resetOption: false })
    }

    /* JSX */
    return (
        <div
            onPointerDown={handlePointerDown}
            className={"d-s-option-drop-cat-container " + (storeDisplay?.collection?.selected.toLowerCase() === cat.title.toLowerCase() ? "selected" : "")}>
            <p>{cat.title}</p>
        </div>
    )
}

export default DSOptionDropCat