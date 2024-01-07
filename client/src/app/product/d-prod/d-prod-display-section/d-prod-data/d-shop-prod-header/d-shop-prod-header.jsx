import React from "react"
import DShopProdHeaderTitle from "./d-shop-prod-header-title/d-shop-prod-header-title"
import DshopProdHeaderPrice from "./d-shop-prod-header-price/d-shop-prod-header-price"
import "./d-shop-prod-header.scss"

const DShopProdHeader = () => {

    /* JSX */
    return (
        <div className="d-shop-prod-header-container">
            <DShopProdHeaderTitle/>
            <DshopProdHeaderPrice/>
        </div>
    )
}

export default DShopProdHeader