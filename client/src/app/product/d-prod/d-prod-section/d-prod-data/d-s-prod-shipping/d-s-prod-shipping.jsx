import React from "react"
import { useShipping } from "../../../../../../hooks/useShipping"
import "./d-s-prod-shipping.scss"

const DSProdShipping = () => {

    /* JSX */
    return (
        <div className="d-s-prod-shipping-container">
            <p>Shipping:</p>
            <p>{useShipping()}</p>
        </div>
    )
}

export default DSProdShipping