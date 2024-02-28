import React, { useContext } from "react"
import { ShopifyContext } from "../../../../context/shopify"
import { GlobalContext } from "../../../../context/global"
import "./p-stock.scss"

const PStock = () => {

    /* Global */
    const {
        storeDisplay
    } = useContext(ShopifyContext)

    const {
        media
    } = useContext(GlobalContext)

    /* JSX */
    return (
        <div className="p-stock-container">
            <h3>
                { media.type === "mobile" ? "(" : "" }
                { storeDisplay?.product?.availableForSale ? "In Stock" : "No Stock" }
                { media.type === "mobile" ? ")" : "" }
            </h3>
        </div>
    )
}

export default PStock