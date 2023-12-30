import React, { useContext } from "react"
import { ShopifyContext } from "../../../../../../context/shopify"
import "./d-shop-back-to-collection.scss"

const DShopBackToCollection = () => {

    /* Global Variables */
    const {
        updateProductDisplay
    } = useContext(ShopifyContext)

    /* Functions */
    const handlePointerDown = () => {
        updateProductDisplay({ product: {} })
    }

    /* JSX */
    return (
        <div
            className="d-shop-back-to-collection-container"
            onPointerDown={handlePointerDown}>
            <span className="material-symbols-outlined">keyboard_return</span>
            <p>Back To Collections</p>
        </div>
    )
}

export default DShopBackToCollection