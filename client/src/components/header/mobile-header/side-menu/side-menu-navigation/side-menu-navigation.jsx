import React from "react"
import { Link, useLocation } from 'react-router-dom';
import "./side-menu-navigation.scss"

const SideMenuNavigation = () => {

    /* Hooks */
    const location = useLocation();

    /* JSX */
    return (
        <nav className="side-menu">
            <ul>
                <li className={location.pathname.includes("/mission") ? "active" : ""}>
                    <Link to="/mission">Mission</Link></li>
                <li className={location.pathname.includes("/exchange") ? "active" : ""}>
                    <Link to="/exchange">Exchange</Link></li>
                <li className={location.pathname.includes("shop") ? "active" : ""}>
                    <Link to="/shop"><span className="material-symbols-outlined">storefront</span>Shop</Link></li>
                <li className={location.pathname.includes("/cart") ? "active" : ""}>
                    <Link to="/cart"><span className="material-symbols-outlined">shopping_cart</span>Cart</Link></li>
                <li className={location.pathname.includes("/contact") ? "active" : ""}>
                    <Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default SideMenuNavigation