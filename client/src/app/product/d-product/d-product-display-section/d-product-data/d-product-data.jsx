import React from "react"
import DShopProductHeader from "./d-shop-product-header/d-shop-product-header"
import DShopProductDesctiption from "./d-shop-product-desctiption/d-shop-product-desctiption"
import DShopProductOptions from "./d-shop-product-options/d-shop-product-options"
import DShopProductFooter from "./d-shop-product-footer/d-shop-product-footer"
import "./d-product-data.scss"

const DProductDisplayData = () => {

    /* JSX */
    return (
        <div className="d-product-data-container">
            <DShopProductHeader/>
            <DShopProductDesctiption/>
            <DShopProductOptions/>
            <DShopProductFooter/>
        </div>
    )
}

export default DProductDisplayData