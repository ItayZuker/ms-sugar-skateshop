import React, { useContext } from "react"
import { ShopifyContext } from "../../../../../context/shopify"
import "./m-s-cat-item.scss"

const MSCatItem = ({ cat }) => {

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
            className={"m-s-cat-item-container " + (storeDisplay?.collection?.selected?.toLowerCase() === cat?.title?.toLowerCase() ? "selected" : "")}>
            <p>{cat.title}</p>
        </li>
    )
}

export default MSCatItem