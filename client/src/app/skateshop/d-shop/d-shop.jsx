import React, { useContext } from "react"
import { ShopifyContext } from "../../../context/shopify"
import DShopCollectionPage from "./d-shop-collection-page/d-shop-collection-page"
import DShopProductPage from "./d-shop-product-page/d-shop-product-page"
import "./d-shop.scss"

const DShop = () => {

    /* Global Variables */
    const {
        storeDisplay
    } = useContext(ShopifyContext)

    /* JSX */
    return (
        <div className="d-shop-container">
            {storeDisplay.product.id
                ? <DShopProductPage/>
                : <DShopCollectionPage/>
            }
        </div>
    )
}

export default DShop