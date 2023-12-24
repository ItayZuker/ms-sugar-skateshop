import React, { useContext } from "react"
import { ShopifyContext } from "../../../../../../../context/shopify"
import "./d-shop-collection-dropdown-item.scss"

const DShopCollectionDropdownItem = ({ title, setOpen, collection }) => {

    /* Global Variables */
    const {
        updateStoreDisplay
    } = useContext(ShopifyContext)

    /* Functions */
    const handlePointerDown = () => {
        setOpen(false)
        updateStoreDisplay({ display: collection.title.toLowerCase()})
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