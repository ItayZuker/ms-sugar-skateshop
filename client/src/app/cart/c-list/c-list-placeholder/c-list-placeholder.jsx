import React from "react"
import { Link } from 'react-router-dom';
import "./c-list-placeholder.scss"

const CListPlaceholder = () => {

    /* JSX */
    return (
        <div className="c-list-placeholder-container">
            <span className="material-symbols-outlined">shopping_cart_off</span>
            <h2>Your cart is empty</h2>
            <Link to="/skateshop">Go to<span className="material-symbols-outlined">storefront</span>Skateshop</Link>
        </div>
    )
}

export default CListPlaceholder