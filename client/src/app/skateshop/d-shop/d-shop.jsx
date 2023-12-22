import React from "react"
import DShopMenu from "./d-shop-menu/d-shop-menu"
import DShopDisplay from "./d-shop-display/d-shop-display"
import "./d-shop.scss"

const DShop = () => {

    /* JSX */
    return (
        <div className="d-shop-container">
            <DShopMenu/>
            <DShopDisplay/>
        </div>
    )
}

export default DShop