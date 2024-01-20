import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import DSProdPrevTitle from "./d-s-prod-prev-title/d-s-prod-prev-title"
import DSProdPrevImage from "./d-s-prod-prev-image/d-s-prod-prev-image"
import DSProdPrevButton from "./d-s-prod-prev-button/d-s-prod-prev-button"
import "./d-s-prod-prev.scss"

const DSProdPrev = ({ product }) => {

    /* Locale */
    const [hover, setHover] = useState(false)

    /* Hooks */
    const navigate = useNavigate()

    /* Functions */
    const handlePointerDown = () => {
        if (product.availableForSale) {
            navigate(`/product/${product.idNumber}`);
        }
    }
    const handleMouseEnter = () => {
        setHover(true)
    }
    const handleMouseLeave = () => {
        setHover(false)
    }

    /* JSX */
    return (
        <div
            className={"d-s-prod-prev-container " + (product.availableForSale ? "" : "out-of-stock")}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onPointerDown={handlePointerDown}>
            <DSProdPrevTitle hover={hover} product={product}/>
            <DSProdPrevImage product={product}/>
            <DSProdPrevButton hover={hover} product={product}/>
        </div>
    )
}

export default DSProdPrev