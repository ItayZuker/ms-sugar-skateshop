import React from "react"
import PQuantity from "../../../../parts/p-quantity/p-quantity"
import PAddToCart from "../../../../parts/p-add-to-cart/p-add-to-cart"
import "./d-p-footer.scss"

const DPFooter = ({ quantity, setQuantity, setNotifyWhenAvailable }) => {

    /* JSX */
    return (
        <div className="d-p-footer-container">
            <PQuantity
                quantity={quantity}
                setQuantity={setQuantity}/>
            <PAddToCart
                setNotifyWhenAvailable={setNotifyWhenAvailable}
                quantity={quantity}/>
        </div>
    )
}

export default DPFooter