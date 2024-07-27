import React, { useContext, useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { ShopifyContext } from "../../../../../context/shopify"
import { getTotalItems } from "../../../../../lib/helpers"
import { useTranslation } from "../../../../../hooks/useTranslation"
import "./desktop-footer-top-center.scss"

const DesktopFooterTopCenter = () => {

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
        <nav className="desktop-footer-top-center-container">
            <ul>
                <li>
                    <p>{t("footer.info.title")}</p>
                    <div className={"inner-li-container " + (location.pathname.includes("/mission") ? "active" : "")}>
                        <Link
                            to="/mission"
                            aria-label={t("navigation.mission.aria_label")}
                            aria-current={location.pathname.includes("/mission") ? "page" : undefined}>{t("navigation.mission.title")}</Link></div>
                    <div className={"inner-li-container " + (location.pathname.includes("/faq") ? "active" : "")}>
                        <Link
                            to="/faq"
                            aria-label={t("navigation.faq.aria_label")}
                            aria-current={location.pathname.includes("/faq") ? "page" : undefined}>{t("navigation.faq.title")}</Link></div>
                    <div className={"inner-li-container " + (location.pathname.includes("/contact") ? "active" : "")}>
                        <Link
                            to="/contact"
                            aria-label={t("navigation.contact.aria_label")}
                            aria-current={location.pathname.includes("/contact") ? "page" : undefined}>{t("navigation.contact.title")}</Link></div>
                </li>
                <li>
                    <p>{t("footer.market.title")}</p>
                    <div className={"inner-li-container " + (location.pathname.includes("/exchange") ? "active" : "")}>
                        <Link
                            to="/exchange"
                            aria-label={t("navigation.exchange.aria_label")}
                            aria-current={location.pathname.includes("/exchange") ? "page" : undefined}>{t("navigation.exchange.title")}</Link></div>
                    <div className={"inner-li-container " + (location.pathname.includes("/skateshop") ? "active" : "")}>
                        <Link
                            to="/skateshop"
                            aria-label={t("navigation.skateshop.aria_label")}
                            aria-current={location.pathname.includes("/skateshop") ? "page" : undefined}><span className="material-symbols-outlined">storefront</span>{t("navigation.skateshop.title")}</Link></div>
                    <div className={"inner-li-container " + (location.pathname.includes("/cart") ? "active" : "")}>
                        <Link
                            to="/cart"
                            aria-label={t("navigation.cart.aria_label")}
                            aria-current={location.pathname.includes("/cart") ? "page" : undefined}><span className="material-symbols-outlined">shopping_cart</span>{t("navigation.cart.title")}{items > 0 ? `(${items})` : ""}</Link></div>
                </li>
                <li>
                    <p>{t("footer.legal.title")}</p>
                    <div className={"inner-li-container " + (location.pathname.includes("/terms-and-conditions") ? "active" : "")}>
                        <Link
                            to="/terms-and-conditions"
                            aria-label={t("navigation.terms.aria_label")}
                            aria-current={location.pathname.includes("/terms-and-conditions") ? "page" : undefined}>{t("navigation.terms.title")}</Link></div>
                </li>
                <li>
                    <p>{t("footer.social.title")}</p>
                    <div className="inner-li-container">
                        <Link
                            to="https://twitter.com/MsSugarOfficial"
                            target="_blank"
                            aria-label={t("navigation.social.twitter.aria_label")}
                            rel="noopener noreferrer">{t("navigation.twitter.title")}</Link></div>
                </li>
            </ul>
        </nav>
    )
}

export default DesktopFooterTopCenter