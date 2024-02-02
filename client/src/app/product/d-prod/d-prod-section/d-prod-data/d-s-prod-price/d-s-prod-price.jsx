import React, { useContext } from "react"
import { ShopifyContext } from "../../../../../../context/shopify"
import "./d-s-prod-price.scss"

const DSProdPrice = () => {

    /* Global */
    const {
        storeDisplay
    } = useContext(ShopifyContext)

    /* Functions */
    const formatPrice = (amount, currencyCode) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currencyCode,
        }).format(amount);
    };

    /* JSX */
    return (
        <div className="d-s-prod-price-container">
            <h2>{formatPrice(storeDisplay.variant.price.amount, storeDisplay.variant.price.currencyCode)}</h2>
        </div>
    )
}

export default DSProdPrice