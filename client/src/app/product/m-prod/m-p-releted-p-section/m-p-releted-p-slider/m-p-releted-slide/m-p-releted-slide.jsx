import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Img } from "react-image"
import "./m-p-releted-slide.scss"

const MPReletedSlide = ({ product }) => {

    /* Global */
    const navigate = useNavigate()

    /* Locale */
    const [img, setImg] = useState({})

    /* Triggers */
    useEffect(() => {
        updateImg()
    }, [product])

    /* Functions */
    const updateImg = () => {
        setImg(product?.images?.[0] || {})
    }

    const handleClick = () => {
        if (product.availableForSale) {
            let variant = product?.variants?.find(variant => variant?.available)
            navigate(`/product/${product?.idNumber}/${variant?.idNumber}`, { replace: true });
        }
    }

    /* JSX */
    return (
        <div
            onClick={handleClick}
            className="m-p-releted-slide-container">
            <div className="m-p-releted-slide-img-container">
                {img?.src && <Img src={img?.src} alt={img?.altText}/> }
            </div>
            <div className="m-p-releted-slide-bottom-container">
                <p>{product?.title}</p>
            </div>
        </div>
    )
}

export default MPReletedSlide