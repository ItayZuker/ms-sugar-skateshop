import React, { useContext } from "react"
import { ShopifyContext } from "../../../../context/shopify"
import "./c-sum-checkout-button.scss"

const CSumCheckoutButton = ({ trigerDelete, loading }) => {

    /* Global */
    const {
        cart
    } = useContext(ShopifyContext)

    /* JSX */
    return (
        <div className={"c-sum-checkout-button-container " + (cart?.lineItems?.length > 0 && trigerDelete === -1 && loading === -1 ? "" : "lock")}>
            <p>Checkout</p>
            <span className="material-symbols-outlined">shopping_cart_checkout</span>
        </div>
    )
}

export default CSumCheckoutButton