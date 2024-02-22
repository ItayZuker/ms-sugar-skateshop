import React, { useContext } from "react"
import { ShopifyContext } from "../../../../../../context/shopify"
import "./d-s-prod-variant.scss"

const DSProdVariant = () => {

    /* Global */
    const {
        storeDisplay
    } = useContext(ShopifyContext)

    /* JSX */
    return (
        <div className="d-s-prod-variant-container">
            <p>Variant:</p>
            <p>{storeDisplay?.variant?.title || ""}</p>
        </div>
    )
}

export default DSProdVariant