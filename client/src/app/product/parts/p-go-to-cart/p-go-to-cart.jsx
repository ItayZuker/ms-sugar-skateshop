import React, { useContext, useState, useEffect } from "react"
import { ShopifyContext } from "../../../../context/shopify"
import { useTranslation } from "../../../../hooks/useTranslation"
import { getTotalItems } from "../../../../lib/helpers"
import { Link } from 'react-router-dom'
import "./p-go-to-cart.scss"

const PGoToCart = ({ cartButtonOnMobile }) => {

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
        const lignItems = getTotalItems({ lineItems: cart.lineItems })
        setItems(lignItems)
    }

    /* JSX */
    return (
        <Link
            to="/cart"
            className={"p-go-to-cart-container " + (items > 0 ? "active " : "") + (cartButtonOnMobile ? "active-on-mobil" : "")}>
                <p>{t("pages.product.cart_button.title")} <span className="quantity">{items > 0 ? `(${items})` : ""}</span></p>
        </Link>
    )
}

export default PGoToCart