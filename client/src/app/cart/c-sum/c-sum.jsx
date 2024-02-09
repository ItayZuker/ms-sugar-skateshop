import React from "react"
import CSumSubTotal from "./c-sum-subtotal/c-sum-subtotal"
import CSumShipping from "./c-sum-shipping/c-sum-shipping"
import CSumTax from "./c-sum-tax/c-sum-tax"
import CSumCheckoutButton from "./c-sum-checkout-button/c-sum-checkout-button"
import "./c-sum.scss"

const CSum = () => {

    /* JSX */
    return (
        <div className="c-sum-container">
            <CSumSubTotal/>
            <CSumShipping/>
            <CSumTax/>
            <CSumCheckoutButton/>
        </div>
    )
}

export default CSum