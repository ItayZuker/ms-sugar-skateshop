import React from "react"
import DShopMenu from "./d-shop-menu/d-shop-menu"
import DShopDisplay from "./d-shop-display/d-shop-display"
import "./d-shop-collection-page.scss"

const DShopCollectionPage = () => {

    /* JSX */
    return (
        <div className="d-shop-collection-page-container">
            <DShopMenu/>
            <DShopDisplay/>
        </div>
    )
}

export default DShopCollectionPage