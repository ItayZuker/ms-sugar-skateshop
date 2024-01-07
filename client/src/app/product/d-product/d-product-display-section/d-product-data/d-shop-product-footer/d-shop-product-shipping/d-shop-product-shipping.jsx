import React, { useContext } from "react"
import { GlobalContext } from "../../../../../../../context/global"
import "./d-shop-product-shipping.scss"
import { ShopifyContext } from "../../../../../../../context/shopify"

const DShopProductShipping = () => {

    /* Global */
    const {
        geoData
    } = useContext(GlobalContext)

    const {
        storeDisplay
    } = useContext(ShopifyContext)

    /* JSX */
    return (
        <div className="d-shop-product-shipping-container">
            <p>Shipping data</p>
        </div>
    )
}

export default DShopProductShipping