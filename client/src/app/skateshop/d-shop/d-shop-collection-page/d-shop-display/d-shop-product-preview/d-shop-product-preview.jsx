import React, { useContext, useState } from "react"
import { ShopifyContext } from "../../../../../../context/shopify"
import DShopProductPrevTitle from "./d-shop-product-prev-title/d-shop-product-prev-title"
import DShopProductPrevImage from "./d-shop-product-prev-image/d-shop-product-prev-image"
import DShopProductPrevButton from "./d-shop-product-prev-button/d-shop-product-prev-button"
import "./d-shop-product-preview.scss"

const DShopProductPreview = ({ product }) => {

    /* Global Variables */
    const {
        updateProductDisplay
    } = useContext(ShopifyContext)

    /* Locale Variables */
    const [hover, setHover] = useState(false)

    /* Functions */
    const handlePointerDown = () => {
        if (product.availableForSale) {
            updateProductDisplay({ product })
        }
    }
    const handleMouseEnter = () => {
        setHover(true)
    }
    const handleMouseLeave = () => {
        setHover(false)
    }

    /* JSX */
    return (
        <div
            className={"d-shop-product-preview-container " + (product.availableForSale ? "" : "out-of-stock")}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onPointerDown={handlePointerDown}>
            <DShopProductPrevTitle hover={hover} product={product}/>
            <DShopProductPrevImage product={product}/>
            <DShopProductPrevButton hover={hover} product={product}/>
        </div>
    )
}

export default DShopProductPreview