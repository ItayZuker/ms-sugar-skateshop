import React, { useContext, useState } from "react"
import { ShopifyContext } from "../../../../context/shopify"
import "./p-add-to-cart.scss"

const PAddToCart = ({ quantity }) => {

    /* Global */
    const {
        addToCart,
        storeDisplay
    } = useContext(ShopifyContext)

    /* Locale */
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    /* Functions */
    const triggerSuccess = () => {
        setSuccess(true);
        setTimeout(() => {
            setSuccess(false);
        }, 1000);
    }
    const handlePointerDown = async () => {
        if (storeDisplay?.variant?.available) {
            setLoading(true)
            try {
                await addToCart({ 
                    variantId: storeDisplay?.variant?.id,
                    quantity })
                setLoading(false)
                triggerSuccess()
            } catch (err) {
                setLoading(false)
            }
        }
    }

    /* JSX */
    if (storeDisplay?.variant?.available) {
        return (
            <div
                className="p-add-to-cart-container"
                onPointerDown={handlePointerDown}>
                <div className={"success " + (success ? "active" : "")}>
                    <span className="material-symbols-outlined">done</span>
                </div>
                <div className={"add " + (loading ? "" : "active")}>
                    <p>Add To Cart<span className="material-symbols-outlined">add_shopping_cart</span></p>
                </div>
                <div className={"loading " + (loading ? "active" : "")}>

                </div>
            </div>
        )
    } else {
        return (
            <div className="p-add-to-cart-container">
                <div className="out-of-stock">
                    <p>Out of stock</p>
                </div>
            </div>
        )
    }
}

export default PAddToCart