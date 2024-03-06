import React from "react"
import { Img } from "react-image" 
import "./d-p-thombnail.scss"

const DPThombnail = ({ image, imgIndex, setActiveImage, activeImage }) => {

    /* Functions */
    const handleMouseEnter = () => {
        setActiveImage(imgIndex)
    }

    /* JSX */
    return (
        <div
            className={"d-p-thombnail-container " + (activeImage === imgIndex ? "active" : "")}
            onClick={handleMouseEnter}
            onMouseEnter={handleMouseEnter}>
            <Img src={image.src}/>
        </div>
    )
}

export default DPThombnail