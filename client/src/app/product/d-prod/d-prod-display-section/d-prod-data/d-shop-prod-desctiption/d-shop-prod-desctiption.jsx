import React, { useContext } from "react"
import { ShopifyContext } from "../../../../../../context/shopify"
import "./d-shop-prod-desctiption.scss"

const DShopProdDesctiption = () => {

    /* Global */
    const {
        storeDisplay
    } = useContext(ShopifyContext)

    /* JSX */
    return (
        <div className="d-shop-prod-desctiption-container">
            <p>{storeDisplay.product.description}</p>
        </div>
    )
}

export default DShopProdDesctiption