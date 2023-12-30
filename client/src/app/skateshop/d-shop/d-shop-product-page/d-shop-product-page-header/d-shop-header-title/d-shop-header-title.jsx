import React, { useContext } from "react"
import "./d-shop-header-title.scss"
import { ShopifyContext } from "../../../../../../context/shopify"

const DShopHeaderTitle = () => {

    /* Global Variables */
    const {
        storeDisplay
    } = useContext(ShopifyContext)

    /* JSX */
    return (
        <div className="d-shop-header-title-collection">
            <h1>{storeDisplay.collection.selected}</h1>
        </div>
    )
}

export default DShopHeaderTitle