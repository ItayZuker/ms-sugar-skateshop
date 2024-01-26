import React, { useContext } from "react"
import { GlobalContext } from "../../../../../../../context/global"
import { ShopifyContext } from "../../../../../../../context/shopify"
import "./d-s-prod-shipping.scss"

const DSProdShipping = () => {

    /* Global */
    const {
        geoData
    } = useContext(GlobalContext)

    const {
        storeDisplay
    } = useContext(ShopifyContext)

    /* JSX */
    return (
        <div className="d-s-prod-shipping-container">
            <p>Shipping data</p>
        </div>
    )
}

export default DSProdShipping