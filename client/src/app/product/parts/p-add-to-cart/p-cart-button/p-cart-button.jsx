import React, { useState, useEffect, useContext } from "react"
import { ShopifyContext } from "../../../../../context/shopify"
import { getTotalItems } from "../../../../../lib/helpers"
import "./p-cart-button.scss"

const PCartButton = ({ showCartButton }) => {

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
        <div className={"p-cart-button-container " + (showCartButton ? "active" : "")}>
            <div className="p-cart-inner-button-container">
                <p>Cart {items > 0 ? `(${items})` : ""}</p>
            </div>
        </div>
    )
}

export default PCartButton