import React from "react"
import DShopProdShipping from "./d-shop-prod-shipping/d-shop-prod-shipping"
import DShopProdCheckout from "./d-shop-prod-checkout/d-shop-prod-checkout"
import "./d-shop-prod-footer.scss"

const DShopProdFooter = () => {

    /* JSX */
    return (
        <div className="d-shop-prod-footer-container">
            <DShopProdShipping/>
            <DShopProdCheckout/>
        </div>
    )
}

export default DShopProdFooter