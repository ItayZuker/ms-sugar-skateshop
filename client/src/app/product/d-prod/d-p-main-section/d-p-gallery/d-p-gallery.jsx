import React, { useContext, useEffect, useState } from "react"
import DPBack from "./d-p-back/d-p-back"
import DPThombnails from "./d-p-sthumbnails/d-p-thumbnails"
import DPImage from "./d-p-image/d-p-image"
import { ShopifyContext } from "../../../../../context/shopify"
import "./d-p-gallery.scss"

const DPGallery = () => {
 
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
        <div className="d-p-gallery-container">
            <div className="d-p-sticky-container">
                <div className="d-p-gallery-top-container">
                    <DPBack/>
                </div>
                <div className="d-p-gallery-inner-container">
                    <DPThombnails
                        images={storeDisplay?.product?.images}
                        setActiveImage={setActiveImage}
                        activeImage={activeImage}/>
                    <DPImage
                        images={storeDisplay?.product?.images}
                        activeImage={activeImage}/>
                </div>
            </div>
        </div>
    )
}

export default DPGallery