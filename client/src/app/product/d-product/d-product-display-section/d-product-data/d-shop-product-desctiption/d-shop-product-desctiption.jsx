import React, { useContext } from "react"
import { ShopifyContext } from "../../../../../../context/shopify"
import "./d-shop-product-desctiption.scss"

const DShopProductDesctiption = () => {

    /* Global */
    const {
        storeDisplay
    } = useContext(ShopifyContext)

    /* JSX */
    return (
        <div className="d-shop-product-desctiption-container">
            {/* <div className="d-shop-product-desctiption-inner-container"> */}
                <p>{storeDisplay.product.description}</p>
            {/* </div> */}
        </div>
    )
}

export default DShopProductDesctiption