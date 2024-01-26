import React, { useContext } from "react"
import { ShopifyContext } from "../../../../../../context/shopify"
import "./d-s-prod-desctiption.scss"

const DSProdDesctiption = () => {

    /* Global */
    const {
        storeDisplay
    } = useContext(ShopifyContext)

    /* JSX */
    return (
        <div className="d-s-prod-desctiption-container">
            <p>{storeDisplay.product.description}</p>
        </div>
    )
}

export default DSProdDesctiption