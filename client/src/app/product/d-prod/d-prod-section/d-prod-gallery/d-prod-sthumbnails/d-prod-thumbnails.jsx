import React from "react"
import DProdThomdnail from "./d-prod-thombnail/d-prod-thombnail"
import "./d-prod-thumbnails.scss"

const DProdThombnails = ({ images, setActiveImage, activeImage }) => {

    /* JSX */
    return (
        <div className="d-prod-thumbnails-container">
            {images.map((image, i) => {
                return <DProdThomdnail
                    key={i}
                    imgIndex={i}
                    image={image}
                    setActiveImage={setActiveImage}
                    activeImage={activeImage}/>
            })}
        </div>
    )
}

export default DProdThombnails