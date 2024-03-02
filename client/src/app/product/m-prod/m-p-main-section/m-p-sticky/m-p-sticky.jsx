import React from "react"
import PAddToCart from "../../../parts/p-add-to-cart/p-add-to-cart"
import "./m-p-sticky.scss"
import PGoToCart from "../../../parts/p-go-to-cart/p-go-to-cart"

const MPSticky = ({ quantity, cartButtonOnMobile, setCartButtonOnMobile }) => {

    /* Locale */
    /* JSX */
    return (
        <div className="m-p-sticky-container">
            <PGoToCart
                cartButtonOnMobile={cartButtonOnMobile}/>
            <PAddToCart
                quantity={quantity}
                setCartButtonOnMobile={setCartButtonOnMobile}/>
        </div>
    )
}

export default MPSticky