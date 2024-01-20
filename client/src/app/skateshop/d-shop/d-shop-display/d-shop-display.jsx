import React, { useContext, useEffect, useState } from "react"
import { ShopifyContext } from "../../../../context/shopify"
import DShopProductPreview from "./d-shop-product-preview/d-shop-product-preview"
import "./d-shop-display.scss"

const DShopDisplay = () => {

    /* Global */
    const {
        storeDisplay,
    } = useContext(ShopifyContext)

    /* JSX */
    return (
        <div className="d-shop-display-container">
            {storeDisplay.collection.products?.map((product, i) => {
                return <DShopProductPreview key={i} product={product}/>
            })}
        </div>
    )
}

export default DShopDisplay