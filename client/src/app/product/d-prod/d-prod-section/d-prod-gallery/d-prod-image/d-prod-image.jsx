import React from "react"
import { Img } from "react-image"
import "./d-prod-image.scss"

const DProdImage = ({images, activeImage}) => {

    /* JSX */
    return (
        <div className="d-prod-image-container">
            {images?.length > 0
                ? <Img src={images?.[activeImage]?.src}/>
                : null
            }
            </div>
        )
}

export default DProdImage