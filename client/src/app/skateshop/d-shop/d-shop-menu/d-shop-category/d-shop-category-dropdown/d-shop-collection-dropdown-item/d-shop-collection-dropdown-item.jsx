import React, { useContext } from "react"
import { ShopifyContext } from "../../../../../../../context/shopify"
import "./d-shop-collection-dropdown-item.scss"

const DShopCollectionDropdownItem = ({ title, setOpen, collection }) => {

    /* Global Variables */
    const {
        updateCollectionDisplay,
        updateOptionsDisplay
    } = useContext(ShopifyContext)

    /* Functions */
    const handlePointerDown = () => {
        const display = collection.title.toLowerCase()
        updateCollectionDisplay({ display })
        updateOptionsDisplay({ display })
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