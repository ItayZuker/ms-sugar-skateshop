import React, { useContext, useState } from "react"
import { ShopifyContext } from "../../../../context/shopify"
import { useMedia } from "../../../../hooks/useMedia"
import PAddButton from "./p-add-button/p-add-button"
import PNotofyMe from "./p-notify-me/p-notify-me"
import "./p-add-to-cart.scss"

const PAddToCart = ({ quantity, setCartButtonOnMobile, setNotifyWhenAvailable, notifyWhenAvailable }) => {

    /* Global */
    const { addToCart, storeDisplay } = useContext(ShopifyContext)

    const { media } = useMedia()

    /* Locale */
    const [loading, setLoading] = useState(false)

    const [success, setSuccess] = useState(false)

    /* Functions */
    const triggerSuccess = () => {
        setSuccess(true);
        setTimeout(() => {
            setSuccess(false);
            media.type === "mobile" && setCartButtonOnMobile(true)
        }, 1000);
    }

    const handleClick = async () => {
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
            className={"p-add-to-cart-container " + (storeDisplay?.variant?.available ? "" : "out-of-stock")}
            onClick={handleClick}>
            { storeDisplay?.variant?.available 
                ? <PAddButton
                    success={success}
                    loading={loading}/>
                : <PNotofyMe
                    notifyWhenAvailable={notifyWhenAvailable}
                    setNotifyWhenAvailable={setNotifyWhenAvailable}/> }
        </div>
    )
}

export default PAddToCart