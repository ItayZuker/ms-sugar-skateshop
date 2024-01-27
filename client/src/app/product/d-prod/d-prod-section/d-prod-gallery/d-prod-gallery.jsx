import React, { useContext, useState } from "react"
import DProdThombnails from "./d-prod-sthumbnails/d-prod-thumbnails"
import DProdImage from "./d-prod-image/d-prod-image"
import { ShopifyContext } from "../../../../../context/shopify"
import "./d-prod-gallery.scss"

const DProdGallery = () => {
 
    /* Global */
    const {
        storeDisplay
    } = useContext(ShopifyContext)

    /* Locale */
    const [activeImage, setActiveImage] = useState(0)

    /* JSX */
    return (
        <div className="d-prod-gallery-container">
            <DProdThombnails
                images={storeDisplay?.product?.images}
                setActiveImage={setActiveImage}
                activeImage={activeImage}/>
            <DProdImage
                images={storeDisplay?.product?.images}
                activeImage={activeImage}/>
        </div>
    )
}

export default DProdGallery