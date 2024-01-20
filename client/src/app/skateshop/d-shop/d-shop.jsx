import React from "react"
import DShopMenu from "./d-s-menu/d-s-menu"
import DShopDisplay from "./d-s-display/d-s-display"
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