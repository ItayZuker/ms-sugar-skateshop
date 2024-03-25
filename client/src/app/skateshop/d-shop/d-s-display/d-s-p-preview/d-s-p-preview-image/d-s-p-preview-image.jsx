import React, { useContext, useEffect, useState } from "react"
import { ShopifyContext } from "../../../../../../context/shopify"
import { Img } from "react-image"
import placeholder from "../../../../../../assets/image-placeholder.svg"
import "./d-s-p-preview-image.scss"

const DSPPreviewImage = ({ product }) => {

    /* Global */
    const { storeDisplay } = useContext(ShopifyContext)

    /* Locale */
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
            setImg({src: placeholder, alt: "Skateshop image placeholder"})
        }

    }

    /* JSX */
    return (
        <div className="d-s-p-preview-image-container">
            {img.src
                ? <Img src={img.src} loading="lazy" alt={img.alt} />
                : null
            }
        </div>
    )
}

export default DSPPreviewImage