import React, { useContext, useEffect, useState } from "react"
import { ShopifyContext } from "../../../../context/shopify";
import { Link, useLocation } from 'react-router-dom';
import { getTotalItems } from "../../../../lib/helpers"
import "./navigation.scss"

const Navigation = () => {

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
        const lignItems = getTotalItems({ lineItems: cart.lineItems })
        setItems(lignItems)
    }

    /* JSX */
    return (
        <nav className="desktop">
            <ul>
                <li className={location.pathname.includes("/mission") ? "active" : ""}>
                    <Link to="/mission">Mission</Link></li>
                <li className={location.pathname.includes("/exchange") ? "active" : ""}>
                    <Link to="/exchange">Exchange</Link></li>
                <li className={location.pathname.includes("/skateshop") ? "active" : ""}>
                    <Link to="/skateshop"><span className="material-symbols-outlined">storefront</span>Skateshop</Link></li>
                <li className={location.pathname.includes("/cart") ? "active" : ""}>
                    <Link to="/cart"><span className="material-symbols-outlined">shopping_cart</span>Cart 
                        <p className="quantity">{items > 0 ? `(${items})` : ""}</p></Link></li>
            </ul>
        </nav>
    )
}

export default Navigation