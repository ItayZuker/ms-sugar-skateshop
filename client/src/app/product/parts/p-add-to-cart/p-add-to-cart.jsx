import React, { useContext, useState } from "react"
import { ShopifyContext } from "../../../../context/shopify"
import PAddButton from "./p-add-button/p-add-button"
import POut from "./p-out/p-out"
import "./p-add-to-cart.scss"

const PAddToCart = ({ quantity, setCartButtonOnMobile }) => {

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
            setCartButtonOnMobile(true)
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
    return (
        <div
            className="p-add-to-cart-container"
            onPointerDown={handlePointerDown}>
            { storeDisplay?.variant?.available 
                ? <PAddButton success={success} loading={loading}/>
                : <POut/> }
        </div>
    )
}

export default PAddToCart