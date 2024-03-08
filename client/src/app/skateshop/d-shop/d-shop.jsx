import React, { useState } from "react"
import DShopMenu from "./d-s-menu/d-s-menu"
import DShopDisplay from "./d-s-display/d-s-display"
import "./d-shop.scss"

const DShop = ({ products, collectionOptions }) => {

    /* JSX */
    return (
        <div className="d-shop-container">
            <div className="d-shop-inner-container one">
                <DShopMenu
                    collectionOptions={collectionOptions}/>
            </div>
            <div className="d-shop-inner-container two">
                <DShopDisplay
                    products={products}/>
            </div>
        </div>
    )
}

export default DShop