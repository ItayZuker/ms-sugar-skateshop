import React, { useContext } from "react"
import { ShopifyContext } from "../../../../context/shopify"
import "./p-title.scss"

const PTitle = () => {

    /* Global */
    const {
        storeDisplay
    } = useContext(ShopifyContext)

    /* JSX */
    return (
        <div className="p-title-container">
            <h2>{storeDisplay?.product?.title}</h2>
        </div>
    )
}

export default PTitle