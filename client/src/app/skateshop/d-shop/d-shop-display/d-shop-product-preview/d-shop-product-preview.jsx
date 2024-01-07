import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import DShopProductPrevTitle from "./d-shop-product-prev-title/d-shop-product-prev-title"
import DShopProductPrevImage from "./d-shop-product-prev-image/d-shop-product-prev-image"
import DShopProductPrevButton from "./d-shop-product-prev-button/d-shop-product-prev-button"
import "./d-shop-product-preview.scss"

const DShopProductPreview = ({ product }) => {

    /* Locale */
    const [hover, setHover] = useState(false)

    /* Hooks */
    const navigate = useNavigate()

    /* Functions */
    const handlePointerDown = () => {
        if (product.availableForSale) {
            navigate(`/product/${product.idNumber}`);
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