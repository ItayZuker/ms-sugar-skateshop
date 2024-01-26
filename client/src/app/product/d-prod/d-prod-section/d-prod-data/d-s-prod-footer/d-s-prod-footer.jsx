import React from "react"
import DSProdShipping from "./d-s-prod-shipping/d-s-prod-shipping"
import DSProdCheckout from "./d-s-prod-checkout/d-s-prod-checkout"
import "./d-s-prod-footer.scss"

const DSProdFooter = () => {

    /* JSX */
    return (
        <div className="d-s-prod-footer-container">
            <DSProdShipping/>
            <DSProdCheckout/>
        </div>
    )
}

export default DSProdFooter