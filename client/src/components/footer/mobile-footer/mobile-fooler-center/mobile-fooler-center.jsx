import React from "react"
import { Link, useLocation } from "react-router-dom"
import "./mobile-fooler-center.scss"

const MobileFoolerCenter = () => {

    /* Hooks */
    const location = useLocation()
 
    /* JSX */
    return (
        <nav className="mobile-footer-center-container">
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
                    <li className={location.pathname.includes("/shop") ? "active" : ""}><Link to="/shop"><span className="material-symbols-outlined">storefront</span>Shop</Link></li>
                    <li className={location.pathname.includes("/cart") ? "active" : ""}><Link to="/cart"><span className="material-symbols-outlined">shopping_cart</span>Cart</Link></li>
                </div>
                <div className="inner-container">
                    <p>Legal</p>
                    <li className={location.pathname.includes("/privecy-policy") ? "active" : ""}><Link to="/privecy-policy">Privecy</Link></li>
                    <li className={location.pathname.includes("/terms-and-conditions") ? "active" : ""}><Link to="/terms-and-conditions">Terms</Link></li>
                </div>
                <div className="inner-container">
                    <p>Social</p>
                    <li><Link to="/">Tweeter</Link></li>
                </div>
            </ul>
        </nav>
    )
}

export default MobileFoolerCenter