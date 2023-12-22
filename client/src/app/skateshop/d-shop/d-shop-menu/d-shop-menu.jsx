import React, { useContext } from "react"
import { ShopifyContext } from "../../../../context/shopify"
import DShopCategory from "./d-shop-category/d-shop-category"
import "./d-shop-menu.scss"

const DShopMenu = () => {

    /* Global Variables */
    const {
        store
    } = useContext(ShopifyContext)

    /* JSX */
    return (
        <div className="d-shop-menu-container">
            <div className="inner-d-shop-menu-container">
                <DShopCategory/>
            </div>
        </div>
    )
}

export default DShopMenu