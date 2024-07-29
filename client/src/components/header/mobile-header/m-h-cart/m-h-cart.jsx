import React, { useContext, useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { ShopifyContext } from "../../../../context/shopify"
import { getTotalItems } from "../../../../lib/helpers"
import { useTranslation } from "../../../../hooks/useTranslation"
import "./m-h-cart.scss"

const MHCart = () => {

    /* Global */
    const { cart } = useContext(ShopifyContext)
    const { t } = useTranslation()

    /* Locale */
    const [items, setItems] = useState(0)

    /* Triggers */
    useEffect(() => {
        updateItems()
    }, [cart?.lineItems])

    /* Functions */
    const updateItems = () => {
        const lineItems = getTotalItems({ lineItems: cart.lineItems })
        setItems(lineItems)
    }

    /* JSX */
    return (
        <Link
            aria-label={t("navigation.cart.aria_label")}
            to="/cart"
            className={"m-h-cart-container " + (items > 0 ? "active" : "")}>
            <span className="material-symbols-outlined" aria-hidden="true">shopping_cart</span>
            <span className="visually-hidden">Cart with {items} items</span>
            {items > 0 ? `(${items})` : ""}
        </Link>
    )
}

export default MHCart