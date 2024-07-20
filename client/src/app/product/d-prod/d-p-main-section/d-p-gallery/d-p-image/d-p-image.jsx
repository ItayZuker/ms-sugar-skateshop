import React from "react"
import { Img } from "react-image"
import "./d-p-image.scss"

const DPImage = ({images, activeImage}) => {

    /* JSX */
    return (
        <div
            className="d-p-image-container">
            {images?.length > 0
                ? <Img src={images?.[activeImage]?.src} alt={images?.[activeImage]?.altText}/>
                : null
            }
            </div>
        )
}

export default DPImage