import React, { useContext } from "react"
import { ShopifyContext } from "../../../../../../../context/shopify"
import "./d-s-prod-header-price.scss"

const DSProdHeaderPrice = () => {

    /* Global */
    const {
        storeDisplay
    } = useContext(ShopifyContext)

    /* JSX */
    return (
        <div className="d-s-prod-header-price-container">
            <h2>{storeDisplay.variant.price.amount} {storeDisplay.variant.price.currencyCode}</h2>
        </div>
    )
}

export default DSProdHeaderPrice