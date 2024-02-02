import React, { useContext } from "react"
import { ShopifyContext } from "../../../../../../context/shopify"
import "./d-s-prod-stock.scss"

const DSProdStock = () => {

    /* Global */
    const {
        storeDisplay
    } = useContext(ShopifyContext)

    /* JSX */
    return (
        <div className="d-s-prod-stock-container">
            <h3>{storeDisplay?.product?.availableForSale ? "In Stock" : "No Stock"}</h3>
        </div>
    )
}

export default DSProdStock