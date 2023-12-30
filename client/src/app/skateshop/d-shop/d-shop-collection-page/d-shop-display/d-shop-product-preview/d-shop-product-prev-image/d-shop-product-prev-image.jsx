import React, { useContext, useEffect, useState } from "react"
import { ShopifyContext } from "../../../../../../../context/shopify"
import "./d-shop-product-prev-image.scss"

const DShopProductPrevImage = ({ product }) => {

    /* Global Variables */
    const {
        storeDisplay
    } = useContext(ShopifyContext)

    /* Locale Variables */
    const [img, setImg] = useState({src: "", alt: ""})

    /* triggers */
    useEffect(() => {
        updateImg()
    }, [storeDisplay, product])

    /* Functions */
    const updateImg = () => {
        if (product.images[0]) {
            setImg({
                src: product.images[0].src,
                alt: product.images[0].alt
            })
        } else {
            setImg({src: "", alt: ""})
        }

    }

    /* JSX */
    return (
        <div className={"d-shop-product-prev-image-container " + (product.availableForSale ? "" : "out-of-stock")}>
            <img src={img.src} loading="lazy" alt={img.alt} />
        </div>
    )
}

export default DShopProductPrevImage