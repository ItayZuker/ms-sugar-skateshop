import React, { useContext } from "react"
import { ShopifyContext } from "../../../../../../../context/shopify"
import "./d-shop-product-header-title.scss"

const DShopProductHeaderTitle = () => {

    /* Global */
    const {
        storeDisplay
    } = useContext(ShopifyContext)

    /* JSX */
    return (
        <div className="d-shop-product-header-title-container">
            <h2>{storeDisplay.product.title}</h2>
            <p>({storeDisplay.variant.title})</p>
        </div>
    )
}

export default DShopProductHeaderTitle