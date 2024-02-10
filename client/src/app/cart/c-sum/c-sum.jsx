import React from "react"
import CSumSubTotal from "./c-sum-subtotal/c-sum-subtotal"
import CSumShipping from "./c-sum-shipping/c-sum-shipping"
import CSumTax from "./c-sum-tax/c-sum-tax"
import CSumDiscount from "./c-sum-discount/c-sum-discount"
import CSumCheckoutButton from "./c-sum-checkout-button/c-sum-checkout-button"
import "./c-sum.scss"

const CSum = ({ trigerDelete, loading }) => {

    /* JSX */
    return (
        <div className="c-sum-container">
            <CSumSubTotal/>
            <CSumShipping/>
            <CSumTax/>
            <CSumDiscount/>
            <CSumCheckoutButton
                loading={loading}
                trigerDelete={trigerDelete}/>
        </div>
    )
}

export default CSum