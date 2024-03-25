import React, { useContext } from "react"
import { ShopifyContext } from "../../../../context/shopify"
import { useMedia } from "../../../../hooks/useMedia"
import "./p-stock.scss"

const PStock = () => {

    /* Global */
    const { storeDisplay } = useContext(ShopifyContext)

    const { media } = useMedia()

    /* JSX */
    return (
        <div className="p-stock-container">
            <h3>
                { media.type === "mobile" ? "(" : "" }
                { storeDisplay?.product?.availableForSale ? "In Stock" : "Out of stock" }
                { media.type === "mobile" ? ")" : "" }
            </h3>
        </div>
    )
}

export default PStock