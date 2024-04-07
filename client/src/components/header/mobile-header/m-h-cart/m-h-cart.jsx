import React, { useContext, useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { ShopifyContext } from "../../../../context/shopify"
import { getTotalItems } from "../../../../lib/helpers"
import "./m-h-cart.scss"

const MHCart = () => {

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
        <Link to="/cart" className={"m-h-cart-container " + (items > 0 ? "active" : "")}>
            <span className="material-symbols-outlined">shopping_cart</span>{items > 0 ? `(${items})` : ""}
        </Link>
    )
}

export default MHCart