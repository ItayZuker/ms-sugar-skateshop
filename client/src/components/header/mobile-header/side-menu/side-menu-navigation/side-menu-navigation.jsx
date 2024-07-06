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
                    <Link to="/mission">{t("pages.mission.title")}</Link></li>
                <li className={location.pathname.includes("/exchange") ? "active" : ""}>
                    <Link to="/exchange">{t("pages.exchange.title")}</Link></li>
                <li className={location.pathname.includes("skateshop") ? "active" : ""}>
                    <Link to="/skateshop"><span className="material-symbols-outlined">storefront</span>{t("pages.skateshop.title")}</Link></li>
                <li className={location.pathname.includes("/cart") ? "active" : ""}>
                    <Link to="/cart"><span className="material-symbols-outlined">shopping_cart</span>{t("pages.cart.title")}
                        {items > 0 ? `(${items})` : ""}</Link></li>
                <li className={location.pathname.includes("/contact") ? "active" : ""}>
                    <Link to="/contact">{t("pages.contact.title")}</Link></li>
            </ul>
        </nav>
    )
}

export default SideMenuNavigation