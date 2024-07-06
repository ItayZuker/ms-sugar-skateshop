import React, { useContext, useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { getTotalItems } from "../../../../lib/helpers"
import { ShopifyContext } from "../../../../context/shopify"
import { useTranslation } from "../../../../hooks/useTranslation"
import "./mobile-fooler-center.scss"

const MobileFoolerCenter = () => {

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
        <nav className="mobile-footer-center-container">
            <ul>
                <div className="inner-container">
                    <p>{t("footer.info.title")}</p>
                    <li className={location.pathname.includes("/mission") ? "active" : ""}><Link to="/mission">{t("pages.mission.title")}</Link></li>
                    <li className={location.pathname.includes("/faq") ? "active" : ""}><Link to="/faq">{t("pages.faq.title")}</Link></li>
                    <li className={location.pathname.includes("/contact") ? "active" : ""}><Link to="/contact">{t("pages.contact.title")}</Link></li>
                </div>
                <div className="inner-container">
                    <p>{t("footer.market.title")}</p>
                    <li className={location.pathname.includes("/exchange") ? "active" : ""}><Link to="/exchange">{t("pages.exchange.title")}</Link></li>
                    <li className={location.pathname.includes("/skateshop") ? "active" : ""}><Link to="/skateshop"><span className="material-symbols-outlined">storefront</span>{t("pages.skateshop.title")}</Link></li>
                    <li className={location.pathname.includes("/cart") ? "active" : ""}><Link to="/cart"><span className="material-symbols-outlined">shopping_cart</span>{t("pages.cart.title")}
                        {items > 0 ? `(${items})` : ""}</Link></li>
                </div>
                <div className="inner-container">
                    <p>{t("footer.legal.title")}</p>
                    <li className={location.pathname.includes("/terms-and-conditions") ? "active" : ""}><Link to="/terms-and-conditions">{t("pages.terms.title")}</Link></li>
                </div>
                <div className="inner-container">
                    <p>{t("footer.social.title")}</p>
                    <li><Link to="/">{t("footer.social.twitter.title")}</Link></li>
                </div>
            </ul>
        </nav>
    )
}

export default MobileFoolerCenter