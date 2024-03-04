import React, { useContext } from "react"
import { ShopifyContext } from "../../../../context/shopify"
import "./c-checkout.scss"

const CCheckout = ({ trigerDelete, loading }) => {

    /* Global */
    const {
        cart
    } = useContext(ShopifyContext)

    /* JSX */
    return (
        <div className={"c-checkout-container " + (cart?.lineItems?.length > 0 && trigerDelete === -1 && loading === -1 ? "" : "lock")}>
            <p>Checkout</p>
            <span className="material-symbols-outlined">shopping_cart_checkout</span>
        </div>
    )
}

export default CCheckout