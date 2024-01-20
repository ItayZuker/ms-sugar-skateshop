import React, { useContext, useEffect, useState } from "react"
import { ShopifyContext } from "../../../../context/shopify"
import DSProdPrev from "./d-s-prod-prev/d-s-prod-prev"
import "./d-s-display.scss"

const DSDisplay = () => {

    /* Global */
    const {
        storeDisplay,
    } = useContext(ShopifyContext)

    /* JSX */
    return (
        <div className="d-s-display-container">
            {storeDisplay.collection.products?.map((product, i) => {
                return <DSProdPrev key={i} product={product}/>
            })}
        </div>
    )
}

export default DSDisplay