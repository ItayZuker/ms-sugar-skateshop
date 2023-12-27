import React, { useEffect, useState } from "react"
import "./d-shop-product-prev-image.scss"

const DShopProductPrevImage = ({ product }) => {

    /* Locale Variables */
    const [img, setImg] = useState({src: "", alt: ""})

    /* triggers */
    useEffect(() => {
        updateImg()
    }, [product])

    /* Functions */
    const updateImg = () => {
        if (product.images[0]) {
            setImg({
                src: product.images[0].src,
                alt: product.images[0].alt
            })
        } else {
            switch (product.productType) {
                case "decks":

                    break;
                case "wheels":

                    break;
                case "bearings":

                    break;
                case "grips":

                    break;
                case "trucks":

                    break;

            }
        }

    }

    /* JSX */
    return (
        <div className="d-shop-product-prev-image-container">
            <img src={img.src} loading="lazy" alt={img.alt} />
        </div>
    )
}

export default DShopProductPrevImage