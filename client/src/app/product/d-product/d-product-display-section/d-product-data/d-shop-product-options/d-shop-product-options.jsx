import React from "react"
import DShopProductOptionsTitle from "./d-shop-product-options-title/d-shop-product-options-title"
import DShopProductOptSelect from "./d-shop-product-opt-select/d-shop-product-opt-select"
import "./d-shop-product-options.scss"

const DShopProductOptions = () => {

    /* JSX */
    return (
        <div className="d-shop-product-options-container">
            <DShopProductOptionsTitle/>
            <DShopProductOptSelect/>
        </div>
    )
}

export default DShopProductOptions