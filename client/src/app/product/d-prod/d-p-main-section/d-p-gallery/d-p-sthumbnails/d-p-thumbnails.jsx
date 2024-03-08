import React from "react"
import DPThomdnail from "./d-p-thombnail/d-p-thombnail"
import "./d-p-thumbnails.scss"

const DPThombnails = ({ images, setActiveImage, activeImage }) => {

    /* JSX */
    return (
        <div className="d-p-thumbnails-container">
            {images?.map((image, i) => {
                return <DPThomdnail
                    key={i}
                    imgIndex={i}
                    image={image}
                    setActiveImage={setActiveImage}
                    activeImage={activeImage}/>
            })}
        </div>
    )
}

export default DPThombnails