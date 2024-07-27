import React, { useContext, useState, useEffect } from "react"
import { Link, useLocation } from 'react-router-dom'
import { ShopifyContext } from "../../../../../context/shopify"
import { getTotalItems } from "../../../../../lib/helpers"
import { useTranslation } from "../../../../../hooks/useTranslation"
import "./side-menu-navigation.scss"

const SideMenuNavigation = () => {

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
        const lignItems = getTotalItems({ lineItems: cart?.lineItems })
        setItems(lignItems)
    }

    /* JSX */
    return (
        <nav className="side-menu">
            <ul>
                <li className={location.pathname.includes("/mission") ? "active" : ""}>
                    <Link
                        to="/mission"
                        aria-label={t("navigation.mission.aria_label")}
                        aria-current={location.pathname.includes("/mission") ? "page" : undefined}>{t("navigation.mission.title")}</Link></li>
                <li className={location.pathname.includes("/exchange") ? "active" : ""}>
                    <Link
                        to="/exchange"
                        aria-label={t("navigation.exchange.aria_label")}
                        aria-current={location.pathname.includes("/exchange") ? "page" : undefined}>{t("navigation.exchange.title")}</Link></li>
                <li className={location.pathname.includes("skateshop") ? "active" : ""}>
                    <Link
                        to="/skateshop"
                        aria-label={t("navigation.skateshop.aria_label")}
                        aria-current={location.pathname.includes("/skateshop") ? "page" : undefined}><span className="material-symbols-outlined">storefront</span>{t("navigation.skateshop.title")}</Link></li>
                <li className={location.pathname.includes("/cart") ? "active" : ""}>
                    <Link
                        to="/cart"
                        aria-label={t("navigation.cart.aria_label")}
                        aria-current={location.pathname.includes("/cart") ? "page" : undefined}><span className="material-symbols-outlined">shopping_cart</span>{t("navigation.cart.title")}
                        {items > 0 ? `(${items})` : ""}</Link></li>
                <li className={location.pathname.includes("/contact") ? "active" : ""}>
                    <Link
                        to="/contact"
                        aria-label={t("navigation.contact.aria_label")}
                        aria-current={location.pathname.includes("/contact") ? "page" : undefined}>{t("navigation.contact.title")}</Link></li>
            </ul>
        </nav>
    )
}

export default SideMenuNavigation