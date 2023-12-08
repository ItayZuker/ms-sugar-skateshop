import React from "react"
import { Link, useLocation } from 'react-router-dom';
import "./navigation.scss"
import { GlobalContext } from "../../../../context/global";

const Navigation = () => {

    /* Hooks */
    const location = useLocation();

    /* JSX */
    return (
        <nav className="desktop">
            <ul>
                <li className={location.pathname.includes("/mission") ? "active" : ""}>
                    <Link to="/mission">Mission</Link></li>
                <li className={location.pathname.includes("/exchange") ? "active" : ""}>
                    <Link to="/exchange">Exchange</Link></li>
                <li className={location.pathname.includes("shop") ? "active" : ""}>
                    <Link to="/shop"><span class="material-symbols-outlined">storefront</span>Shop</Link></li>
                <li className={location.pathname.includes("/cart") ? "active" : ""}>
                    <Link to="/cart"><span class="material-symbols-outlined">shopping_cart</span>Cart</Link></li>
                <li className={location.pathname.includes("/contact") ? "active" : ""}>
                    <Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation