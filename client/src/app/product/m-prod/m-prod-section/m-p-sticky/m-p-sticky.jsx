import React from "react"
import PAddToCart from "../../../parts/p-add-to-cart/p-add-to-cart"
import "./m-p-sticky.scss"

const MPSticky = ({ quantity }) => {

    /* JSX */
    return (
        <div className="m-p-sticky-container">
            <PAddToCart quantity={quantity}/>
        </div>
    )
}

export default MPSticky