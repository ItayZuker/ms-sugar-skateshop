import React from "react"
import DShopProductHeaderTitle from "./d-shop-product-header-title/d-shop-product-header-title"
import DshopProductHeaderPrice from "./d-shop-product-header-price/d-shop-product-header-price"
import "./d-shop-product-header.scss"

const DShopProductHeader = () => {

    /* JSX */
    return (
        <div className="d-shop-product-header-container">
            <DShopProductHeaderTitle/>
            <DshopProductHeaderPrice/>
        </div>
    )
}

export default DShopProductHeader