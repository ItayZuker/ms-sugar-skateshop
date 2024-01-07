import React, { useContext } from "react"
import { ShopifyContext } from "../../../../../../../context/shopify"
import "./d-shop-prod-header-title.scss"

const DShopProdHeaderTitle = () => {

    /* Global */
    const {
        storeDisplay
    } = useContext(ShopifyContext)

    /* JSX */
    return (
        <div className="d-shop-prod-header-title-container">
            <h2>{storeDisplay.product.title}</h2>
            <p>({storeDisplay.variant.title})</p>
        </div>
    )
}

export default DShopProdHeaderTitle