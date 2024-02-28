import React, { useContext } from "react"
import { ShopifyContext } from "../../../../context/shopify"
import { formatPrice } from "../../../../lib/helpers"
import "./p-price.scss"

const PPrice = () => {

    /* Global */
    const {
        storeDisplay
    } = useContext(ShopifyContext)

    /* JSX */
    return (
        <div className="p-price-container">
            <h2>{formatPrice(storeDisplay.variant.price.amount, storeDisplay.variant.price.currencyCode)}</h2>
        </div>
    )
}

export default PPrice