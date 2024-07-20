import React, { useContext, useEffect, useState } from "react"
import { Link, useLocation } from 'react-router-dom'
import { ShopifyContext } from "../../../../context/shopify"
import { getTotalItems } from "../../../../lib/helpers"
import { useTranslation } from "../../../../hooks/useTranslation"
import "./navigation.scss"

const Navigation = () => {

    /* Global */
    const { cart } = useContext(ShopifyContext)
    const { t } = useTranslation()
    const location = useLocation()

    /* Locale */
    const [items, setItems] = useState(0)

    /* Triggers */
    useEffect(() => {
        updateItems()
    }, [cart?.lineItems])

    /* Functions */
    const updateItems = () => {
        const lineItems = getTotalItems({ lineItems: cart?.lineItems })
        setItems(lineItems)
    }

    /* JSX */
    return (
        <nav className="desktop">
            <ul>
                <li className={location.pathname.includes("/mission") ? "active" : ""}>
                    <Link
                        to="/mission"
                        aria-current={location.pathname.includes("/mission") ? "page" : undefined}>{t("pages.mission.title")}</Link></li>
                <li className={location.pathname.includes("/exchange") ? "active" : ""}>
                    <Link
                        to="/exchange"
                        aria-current={location.pathname.includes("/exchange") ? "page" : undefined}>{t("pages.exchange.title")}</Link></li>
                <li className={location.pathname.includes("/skateshop") ? "active" : ""}>
                    <Link
                        to="/skateshop"
                        aria-current={location.pathname.includes("/skateshop") ? "page" : undefined}>
                            <span className="material-symbols-outlined">storefront</span>
                            {t("pages.skateshop.title")}</Link></li>
                <li className={location.pathname.includes("/cart") ? "active" : ""}>
                    <Link
                        to="/cart"
                        aria-current={location.pathname.includes("/cart") ? "page" : undefined}>
                            <span className="material-symbols-outlined">shopping_cart</span>
                            {t("pages.cart.title")} 
                        <p className="quantity">{items > 0 ? `(${items})` : ""}</p></Link></li>
            </ul>
        </nav>
    )
}

export default Navigation