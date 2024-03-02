import React, { useContext, useState, useEffect } from "react"
import { ShopifyContext } from "../../../../context/shopify"
import { getTotalItems } from "../../../../lib/helpers"
import { Link } from 'react-router-dom'
import "./p-go-to-cart.scss"

const PGoToCart = ({ cartButtonOnMobile }) => {

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
            className={"p-go-to-cart-container " + (items > 0 ? "active " : "") + (cartButtonOnMobile ? "active-on-mobil" : "")}>
                <p>Cart <span className="quantity">{items > 0 ? `(${items})` : ""}</span></p>
        </Link>
    )
}

export default PGoToCart