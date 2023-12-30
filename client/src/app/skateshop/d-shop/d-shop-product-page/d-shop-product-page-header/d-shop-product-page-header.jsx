import React from "react"
import DShopBackToCollection from "./d-shop-back-to-collection/d-shop-back-to-collection"
import DShopHeaderTitle from "./d-shop-header-title/d-shop-header-title"
import "./d-shop-product-page-header.scss"

const DShopProductPageHeader = () => {

    /* JSX */
    return (
        <div className="d-shop-product-page-header-container">
            <DShopBackToCollection/>
            {/* <DShopHeaderTitle/> */}
        </div>
    )
}

export default DShopProductPageHeader