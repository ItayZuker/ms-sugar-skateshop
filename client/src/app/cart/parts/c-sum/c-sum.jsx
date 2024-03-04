import React from "react"
import { useMedia } from "../../../../hooks/useMedia"
import CSumSubTotal from "./c-sum-subtotal/c-sum-subtotal"
import CSumShipping from "./c-sum-shipping/c-sum-shipping"
import CSumTax from "./c-sum-tax/c-sum-tax"
import CSumDiscount from "./c-sum-discount/c-sum-discount"
import CCheckout from "../c-checkout/c-checkout"
import "./c-sum.scss"

const CSum = ({ trigerDelete, loading }) => {

    /* Global */
    const { media } = useMedia()

    /* JSX */
    return (
        <div className="c-sum-container">
            <CSumSubTotal/>
            <CSumShipping/>
            <CSumTax/>
            <CSumDiscount/>
            { media.type !== "mobile" && <CCheckout
                                            loading={loading}
                                            trigerDelete={trigerDelete}/> }
        </div>
    )
}

export default CSum