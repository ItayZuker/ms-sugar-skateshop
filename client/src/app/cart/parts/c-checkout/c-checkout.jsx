import React, { useContext } from "react"
import { ShopifyContext } from "../../../../context/shopify"
import { useTranslation } from "../../../../hooks/useTranslation"
import "./c-checkout.scss"

const CCheckout = ({ trigerDelete, loading }) => {

    /* Global */
    const { cart } = useContext(ShopifyContext)
    const { translate } = useTranslation()
    
    /* JSX */
    return (
        <div className={"c-checkout-container " + (cart?.lineItems?.length > 0 && trigerDelete === -1 && loading === -1 ? "" : "lock")}>
            <p>{translate("pages.cart.checkout")}</p>
            <span className="material-symbols-outlined">shopping_cart_checkout</span>
        </div>
    )
}

export default CCheckout