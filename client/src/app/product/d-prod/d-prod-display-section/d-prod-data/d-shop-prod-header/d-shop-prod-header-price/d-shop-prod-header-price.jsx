import React, { useContext } from "react"
import { ShopifyContext } from "../../../../../../../context/shopify"
import "./d-shop-prod-header-price.scss"

const DshopProdHeaderPrice = () => {

    /* Global */
    const {
        storeDisplay
    } = useContext(ShopifyContext)

    /* JSX */
    return (
        <div className="d-shop-prod-header-price-container">
            <h2>{storeDisplay.variant.price.amount} {storeDisplay.variant.price.currencyCode}</h2>
        </div>
    )
}

export default DshopProdHeaderPrice