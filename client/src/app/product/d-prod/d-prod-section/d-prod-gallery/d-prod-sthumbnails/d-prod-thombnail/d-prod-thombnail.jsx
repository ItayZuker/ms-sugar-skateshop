import React from "react"
import { Img } from "react-image" 
import "./d-prod-thombnail.scss"

const DProdThombnail = ({ image, imgIndex, setActiveImage, activeImage }) => {

    /* Functions */
    const handleMouseEnter = () => {
        setActiveImage(imgIndex)
    }

    /* JSX */
    return (
        <div
            className={"d-prod-thombnail-container " + (activeImage === imgIndex ? "active" : "")}
            onClick={handleMouseEnter}
            onMouseEnter={handleMouseEnter}>
            <Img src={image.src}/>
        </div>
    )
}

export default DProdThombnail