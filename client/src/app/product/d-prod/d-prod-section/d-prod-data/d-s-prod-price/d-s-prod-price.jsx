import React, { useContext } from "react"
import { ShopifyContext } from "../../../../../../context/shopify"
import { formatPrice } from "../../../../../../lib/helpers"
import "./d-s-prod-price.scss"

const DSProdPrice = () => {

    /* Global */
    const {
        storeDisplay
    } = useContext(ShopifyContext)

    /* JSX */
    return (
        <div className="d-s-prod-price-container">
            <h2>{formatPrice(storeDisplay.variant.price.amount, storeDisplay.variant.price.currencyCode)}</h2>
        </div>
    )
}

export default DSProdPrice