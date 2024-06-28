import React, { useContext } from "react"
import { ShopifyContext } from "../../../../../context/shopify"
import { formatPrice } from "../../../../../lib/helpers"
import { useTranslation } from "../../../../../hooks/useTranslation"
import "./c-sum-subtotal.scss"

const CSumSubTotal = () => {

    /* Global */
    const { cart } = useContext(ShopifyContext)
    const { translate } = useTranslation()

    /* JSX */
    return (
        <div className="c-sum-subtotal-container">
            <p>{translate("pages.cart.sub_total_title")}</p>
            <h2>{formatPrice(cart?.subtotalPrice?.amount, cart?.subtotalPrice?.currencyCode)}</h2>
        </div>
    )
}

export default CSumSubTotal