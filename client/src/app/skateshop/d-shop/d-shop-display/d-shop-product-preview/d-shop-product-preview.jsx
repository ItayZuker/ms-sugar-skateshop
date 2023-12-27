import React, { useState } from "react"
import DShopProductPrevTitle from "./d-shop-product-prev-title/d-shop-product-prev-title"
import DShopProductPrevImage from "./d-shop-product-prev-image/d-shop-product-prev-image"
import DShopProductPrevButton from "./d-shop-product-prev-button/d-shop-product-prev-button"
import "./d-shop-product-preview.scss"

const DShopProductPreview = ({ product }) => {

    /* Locale Variables */
    const [hover, setHover] = useState(false)

    /* Functions */
    const handleMouseEnter = () => {
        setHover(true)
    }
    const handleMouseLeave = () => {
        setHover(false)
    }

    /* JSX */
    return (
        <div
            className="d-shop-product-preview-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <DShopProductPrevTitle hover={hover} product={product}/>
            <DShopProductPrevImage product={product}/>
            <DShopProductPrevButton hover={hover}/>
        </div>
    )
}

export default DShopProductPreview