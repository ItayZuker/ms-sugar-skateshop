import React, { useContext, useState, useEffect } from "react"
import { ShopifyContext } from "../../../../../../context/shopify"
import { Link } from 'react-router-dom'
import { getTotalItems } from "../../../../../../lib/helpers"
import "./d-p-go-to-cart.scss"

const DPGoToCart = () => {

    /* Global */
    const { cart } = useContext(ShopifyContext)

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
        <Link
            to="/cart"
            className={"d-p-go-to-cart-container " + (items > 0 ? "active" : "")}>
                <p>Cart <span className="quantity">{items > 0 ? `(${items})` : ""}</span></p>
        </Link>
    )
}

export default DPGoToCart