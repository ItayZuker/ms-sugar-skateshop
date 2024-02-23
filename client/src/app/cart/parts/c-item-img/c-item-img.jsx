import React from "react"
import { Img } from "react-image"
import "./c-item-img.scss"

const CItemImg = ({ img }) => {

    /* JSX */
    return (
        <div className="c-item-img-container">
            <Img src={img?.src} alt={img?.altText}/>
        </div>
    )
}

export default CItemImg