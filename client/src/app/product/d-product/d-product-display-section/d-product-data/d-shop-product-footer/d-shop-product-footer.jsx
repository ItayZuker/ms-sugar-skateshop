import React from "react"
import DShopProductShipping from "./d-shop-product-shipping/d-shop-product-shipping"
import DShopProductCheckout from "./d-shop-product-checkout/d-shop-product-checkout"
import "./d-shop-product-footer.scss"

const DShopProductFooter = () => {

    /* JSX */
    return (
        <div className="d-shop-product-footer-container">
            <DShopProductShipping/>
            <DShopProductCheckout/>
        </div>
    )
}

export default DShopProductFooter