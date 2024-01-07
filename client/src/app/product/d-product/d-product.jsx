import React from "react"
import DProductDisplaySection from "./d-product-display-section/d-product-display-section"
import DProductRelatedProductsSection from "./d-product-related-products-section/d-product-related-products-section"
import "./d-product.scss"
// import { ShopifyContext } from "../../../context/shopify"

const DProduct = () => {

    /* JSX */
    return (
        <div className="d-product-container">
            <DProductDisplaySection/>
            <DProductRelatedProductsSection/>
        </div>
    )
}

export default DProduct