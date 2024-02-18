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
        updateCollectionDisplay({ selected: cat.title, resetOption: true })
    }

    /* JSX */
    return (
        <li
            onPointerDown={handlePointerDown}
            className={"d-s-cat-item-container " + (storeDisplay?.collection?.selected?.toLowerCase() === cat?.title?.toLowerCase() ? "selected" : "")}>
            <p>{cat.title}</p>
        </li>
    )
}

export default DSCatItem