import React from "react"
import { useShipping } from "../../../../hooks/useShipping"
import "./p-shipping.scss"

const PShipping = () => {

    /* JSX */
    return (
        <div className="p-shipping-container">
            <p>Shipping:</p>
            <p>{useShipping()}</p>
        </div>
    )
}

export default PShipping