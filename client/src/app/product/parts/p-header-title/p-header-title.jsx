import React, { useContext } from "react"
import { ShopifyContext } from "../../../../context/shopify"
import "./p-header-title.scss"

const PHeaderTitle = () => {

    /* Global */
    const {
        storeDisplay
    } = useContext(ShopifyContext)

    /* JSX */
    return (
        <div className="p-header-title-container">
            <h2>{storeDisplay.product.title}</h2>
        </div>
    )
}

export default PHeaderTitle