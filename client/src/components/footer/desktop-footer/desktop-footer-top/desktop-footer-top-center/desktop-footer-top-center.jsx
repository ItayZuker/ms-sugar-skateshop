import React, { useContext, useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { ShopifyContext } from "../../../../../context/shopify"
import { getTotalItems } from "../../../../../lib/helpers"
import "./desktop-footer-top-center.scss"

const DesktopFooterTopCenter = () => {

    /* Global */
    const { cart } = useContext(ShopifyContext)

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
                <div className="inner-container">
                    <p>Info</p>
                    <li className={location.pathname.includes("/mission") ? "active" : ""}><Link to="/mission">Mission</Link></li>
                    <li className={location.pathname.includes("/faq") ? "active" : ""}><Link to="/faq">FAQ</Link></li>
                    <li className={location.pathname.includes("/contact") ? "active" : ""}><Link to="/contact">Contact</Link></li>
                </div>
                <div className="inner-container">
                    <p>Market</p>
                    <li className={location.pathname.includes("/exchange") ? "active" : ""}><Link to="/exchange">Exchange</Link></li>
                    <li className={location.pathname.includes("/skateshop") ? "active" : ""}><Link to="/skateshop"><span className="material-symbols-outlined">storefront</span>Skateshop</Link></li>
                    <li className={location.pathname.includes("/cart") ? "active" : ""}><Link to="/cart"><span className="material-symbols-outlined">shopping_cart</span>Cart
                        {items > 0 ? `(${items})` : ""}</Link></li>
                </div>
                <div className="inner-container">
                    <p>Legal</p>
                    <li className={location.pathname.includes("/privecy-policy") ? "active" : ""}><Link to="/terms-and-conditions/privacy-policy">Privacy</Link></li>
                    <li className={location.pathname.includes("/terms-and-conditions") ? "active" : ""}><Link to="/terms-and-conditions">Terms</Link></li>
                </div>
                <div className="inner-container">
                    <p>Social</p>
                    <li><Link to="/">Twitter</Link></li>
                </div>
            </ul>
        </nav>
    )
}

export default DesktopFooterTopCenter