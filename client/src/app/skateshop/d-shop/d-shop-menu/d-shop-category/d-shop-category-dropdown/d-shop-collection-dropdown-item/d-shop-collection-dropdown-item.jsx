import React, { useContext } from "react"
import { ShopifyContext } from "../../../../../../../context/shopify"
import "./d-shop-collection-dropdown-item.scss"

const DShopCollectionDropdownItem = ({ title, setOpen, collection }) => {

    /* Global Variables */
    const {
        updateCollectionDisplay
    } = useContext(ShopifyContext)

    /* Functions */
    const handlePointerDown = () => {
        const selected = collection.title.toLowerCase()
        updateCollectionDisplay({ selected, resetOption: false })
        setOpen(false)
    }

    /* JSX */
    return (
        <div
            className="d-shop-collection-dropdown-item-container"
            onPointerDown={handlePointerDown}>
            <p>{title}</p>
        </div>
    )
}

export default DShopCollectionDropdownItem