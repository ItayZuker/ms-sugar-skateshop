import React from "react"
import { Img } from "react-image"
import "./m-p-img.scss"

const MPImg = ({ image }) => {

    /* JSX */
    return (
        <div className="m-p-img-container">
            <Img src={image.src} alt={image.altText}/>
        </div>
    )
}

export default MPImg