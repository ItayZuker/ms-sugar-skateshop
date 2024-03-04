import React from "react"
import { useShipping } from "../../../../../hooks/useShipping"
import "./c-sum-shipping.scss"

const CSumShipping = () => {

    /* JSX */
    return (
        <div className="c-sum-shipping-container">
            <p>Shipping:</p>
            <p>{useShipping()}</p>
        </div>
    )
}

export default CSumShipping