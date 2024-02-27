import React, { useContext, useEffect, useState } from "react"
import DProdBack from "./d-prod-back/d-prod-back"
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

    /* Triggers */
    useEffect(() => {
        updateActiveImage()
    }, [storeDisplay?.product])

    /* Functions */
    const updateActiveImage = () => {
        setActiveImage(0)
    }

    /* JSX */
    return (
        <div className="d-prod-gallery-container">
            <div className="d-prod-sticky-container">
                <div className="d-prod-gallery-top-container">
                    <DProdBack/>
                </div>
                <div className="d-prod-gallery-inner-container">
                    <DProdThombnails
                        images={storeDisplay?.product?.images}
                        setActiveImage={setActiveImage}
                        activeImage={activeImage}/>
                    <DProdImage
                        images={storeDisplay?.product?.images}
                        activeImage={activeImage}/>
                </div>
            </div>
        </div>
    )
}

export default DProdGallery