import React, { useContext } from "react"
import { ShopifyContext } from "../../../../../../../context/shopify"
import "./d-s-prod-header-title.scss"

const DSProdHeaderTitle = () => {

    /* Global */
    const {
        storeDisplay
    } = useContext(ShopifyContext)

    /* JSX */
    return (
        <div className="d-s-prod-header-title-container">
            <h2>{storeDisplay.product.title}</h2>
            <p>{storeDisplay.variant.title}</p>
        </div>
    )
}

export default DSProdHeaderTitle