import React, { useContext } from "react"
import { ShopifyContext } from "../../../../../../../context/shopify"
import DSProdShare from "./d-s-prod-share/d-s-prod-share"
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
            <DSProdShare/>
        </div>
    )
}

export default DSProdHeaderTitle