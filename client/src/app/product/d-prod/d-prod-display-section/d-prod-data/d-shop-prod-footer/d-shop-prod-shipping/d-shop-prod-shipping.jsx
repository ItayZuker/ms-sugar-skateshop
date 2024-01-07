import React, { useContext } from "react"
import { GlobalContext } from "../../../../../../../context/global"
import { ShopifyContext } from "../../../../../../../context/shopify"
import "./d-shop-prod-shipping.scss"

const DShopProdShipping = () => {

    /* Global */
    const {
        geoData
    } = useContext(GlobalContext)

    const {
        storeDisplay
    } = useContext(ShopifyContext)

    /* JSX */
    return (
        <div className="d-shop-prod-shipping-container">
            <p>Shipping data</p>
        </div>
    )
}

export default DShopProdShipping