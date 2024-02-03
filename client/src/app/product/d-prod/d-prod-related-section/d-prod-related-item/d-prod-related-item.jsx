import React, { useContext } from "react"
import { ShopifyContext } from "../../../../../context/shopify"
import { useNavigate } from "react-router-dom"
import { Img } from "react-image"
import "./d-prod-related-item.scss"

const DProdRelatedItem = ({ product }) => {

    /* Global */
    const {
        storeDisplay
    } = useContext(ShopifyContext)
    const navigate = useNavigate()

    /* Locale */
    const img = product.images[0]

    /* Functions */
    const handlePointerDown = () => {
        if (product.availableForSale) {
            let variant = product?.variants?.find(variant => variant?.available)
            navigate(`/product/${product?.idNumber}/${variant?.idNumber}`, { replace: true });
        }
    }

    /* JSX */
    return (
        <div
            className="d-prod-related-item-container"
            onPointerDown={handlePointerDown}>
            <p>{product?.title}</p>
            <div className="image-container">
                <Img src={img.src} loading="lazy" alt={img.alt} />
            </div>
        </div>
    )
}

export default DProdRelatedItem