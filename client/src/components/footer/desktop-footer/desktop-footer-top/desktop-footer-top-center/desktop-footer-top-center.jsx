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
                    <div className={"inner-li-container " + (location.pathname.includes("/mission") ? "active" : "")}><Link
                                                                                                to="/mission"
                                                                                                aria-current={location.pathname.includes("/mission") ? "page" : undefined}>{t("pages.mission.title")}</Link></div>
                    <div className={"inner-li-container " + (location.pathname.includes("/faq") ? "active" : "")}><Link
                                                                                            to="/faq"
                                                                                            aria-current={location.pathname.includes("/faq") ? "page" : undefined}>{t("pages.faq.title")}</Link></div>
                    <div className={"inner-li-container " + (location.pathname.includes("/contact") ? "active" : "")}><Link
                                                                                                to="/contact"
                                                                                                aria-current={location.pathname.includes("/contact") ? "page" : undefined}>{t("pages.contact.title")}</Link></div>
                </li>
                <li>
                    <p>{t("footer.market.title")}</p>
                    <div className={"inner-li-container " + (location.pathname.includes("/exchange") ? "active" : "")}><Link
                                                                                                to="/exchange"
                                                                                                aria-current={location.pathname.includes("/exchange") ? "page" : undefined}>{t("pages.exchange.title")}</Link></div>
                    <div className={"inner-li-container " + (location.pathname.includes("/skateshop") ? "active" : "")}><Link
                                                                                                to="/skateshop"
                                                                                                aria-current={location.pathname.includes("/skateshop") ? "page" : undefined}><span className="material-symbols-outlined">storefront</span>{t("pages.skateshop.title")}</Link></div>
                    <div className={"inner-li-container " + (location.pathname.includes("/cart") ? "active" : "")}><Link
                                                                                            to="/cart"
                                                                                            aria-current={location.pathname.includes("/cart") ? "page" : undefined}><span className="material-symbols-outlined">shopping_cart</span>{t("pages.cart.title")}{items > 0 ? `(${items})` : ""}</Link></div>
                </li>
                <li>
                    <p>{t("footer.legal.title")}</p>
                    <div className={"inner-li-container " + (location.pathname.includes("/terms-and-conditions") ? "active" : "")}><Link
                                                                                                            to="/terms-and-conditions"
                                                                                                            aria-current={location.pathname.includes("/terms-and-conditions") ? "page" : undefined}>{t("pages.terms.title")}</Link></div>
                </li>
                <li>
                    <p>{t("footer.social.title")}</p>
                    <div className="inner-li-container"><Link to="https://twitter.com/MsSugarOfficial" target="_blank" rel="noopener noreferrer">{t("footer.social.twitter.title")}</Link></div>
                </li>
            </ul>
        </nav>
    )
}

export default DesktopFooterTopCenter