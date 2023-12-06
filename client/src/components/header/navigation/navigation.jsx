import React from "react"
import { Link, useLocation } from 'react-router-dom';
import "./navigation.scss"

const Navigation = () => {
    /* Hooks */
    const location = useLocation();

    /* JSX */
    return (
        <nav>
            <ul>
                <li className={location.pathname.includes("/mission") ? "active" : ""}>
                    <Link to="/mission">Mission</Link></li>
                <li className={location.pathname.includes("/exchange") ? "active" : ""}>
                    <Link to="/exchange">Exchange</Link></li>
                <li className={location.pathname.includes("shop") ? "active" : ""}>
                    <Link to="/shop">Shop</Link></li>
                <li className={location.pathname.includes("/cart") ? "active" : ""}>
                    <Link to="/cart">Cart</Link></li>
                <li className={location.pathname.includes("/contact") ? "active" : ""}>
                    <Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation