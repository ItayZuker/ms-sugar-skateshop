import React, { useContext } from "react"
import { ShopifyContext } from "../../../../../context/shopify"
import { formatPrice } from "../../../../../lib/helpers"
import "./c-sum-subtotal.scss"

const CSumSubTotal = () => {

    /* Global */
    const { cart } = useContext(ShopifyContext)

    /* JSX */
    return (
        <div className="c-sum-subtotal-container">
            <p>SubTotal:</p>
            <h2>{formatPrice(cart?.subtotalPrice?.amount, cart?.subtotalPrice?.currencyCode)}</h2>
        </div>
    )
}

export default CSumSubTotal