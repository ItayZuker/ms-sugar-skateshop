import React, { useContext } from "react"
import { ShopifyContext } from "../../../../../../context/shopify"
import "./d-s-cat-item.scss"

const DSCatItem = ({ cat }) => {

    /* Global */
    const {
        storeDisplay,
        updateCollectionDisplay
    } = useContext(ShopifyContext)

    /* Functions */
    const handlePointerDown = () => {
        updateCollectionDisplay({ selected: cat, resetOption: true })
    }

    /* JSX */
    return (
        <div
            onPointerDown={handlePointerDown}
            className={"d-s-cat-item-container " + (storeDisplay.collection.selected === cat ? "selected" : "")}>
            <p>{cat}</p>
        </div>
    )
}

export default DSCatItem