import React from "react"
import DShopMenu from "./d-s-menu/d-s-menu"
import DShopDisplay from "./d-s-display/d-s-display"
import "./d-shop.scss"

const DShop = () => {

    /* JSX */
    return (
        <div className="d-shop-container">
            <div className="d-shop-inner-container one">
                <DShopMenu/>
            </div>
            <div className="d-shop-inner-container two">
                <DShopDisplay/>
            </div>
        </div>
    )
}

export default DShop